import {PlatformTest} from "@tsed/common";
import {Configuration} from "@tsed/di";
import {MongooseService} from "../../src";
import {MONGOOSE_CONNECTIONS} from "../../src/services/MongooseConnections";

describe("MongooseConnections", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should init connection with url", async () => {
    // GIVEN
    const connectStub = jest.fn().mockResolvedValue("test");

    // WHEN
    await PlatformTest.invoke(MONGOOSE_CONNECTIONS, [
      {
        token: Configuration,
        use: {
          get() {
            return {
              url: "mongodb://test",
              connectionOptions: {options: "options"}
            };
          }
        }
      },
      {
        token: MongooseService,
        use: {
          connect: connectStub
        }
      }
    ]);

    // THEN
    expect(connectStub).toHaveBeenCalledWith("default", "mongodb://test", {options: "options"}, true);
  });
  it("should init with a list of connection", async () => {
    // GIVEN
    const connectStub = jest.fn().mockResolvedValue("test");

    // WHEN
    await PlatformTest.invoke(MONGOOSE_CONNECTIONS, [
      {
        token: Configuration,
        use: {
          get() {
            return [
              {
                id: "id",
                url: "mongodb://test",
                connectionOptions: {options: "options"}
              }
            ];
          }
        }
      },
      {
        token: MongooseService,
        use: {
          connect: connectStub
        }
      }
    ]);

    // THEN
    expect(connectStub).toHaveBeenCalledWith("id", "mongodb://test", {options: "options"}, true);
  });
});
