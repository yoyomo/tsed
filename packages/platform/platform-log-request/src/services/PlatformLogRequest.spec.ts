import {PlatformTest} from "@tsed/common";
import {PlatformLogRequest} from "./PlatformLogRequest";

async function createServiceFixture() {
  const service = await PlatformTest.invoke<PlatformLogRequest>(PlatformLogRequest);

  const ctx = PlatformTest.createRequestContext({
    event: {
      request: PlatformTest.createRequest({
        method: "GET",
        url: "url",
        originalUrl: undefined
      }),
      response: PlatformTest.createResponse({
        statusCode: 200
      })
    },
    logger: PlatformTest.injector.logger
  });

  jest.spyOn(PlatformTest.injector.logger, "info").mockResolvedValue(undefined);
  jest.spyOn(PlatformTest.injector.logger, "warn").mockResolvedValue(undefined);
  jest.spyOn(PlatformTest.injector.logger, "trace").mockResolvedValue(undefined);
  jest.spyOn(PlatformTest.injector.logger, "debug").mockResolvedValue(undefined);
  jest.spyOn(PlatformTest.injector.logger, "error").mockResolvedValue(undefined);

  ctx.logger.maxStackSize = 0;
  ctx.data = "test";

  return {request: ctx.request.raw, ctx, service};
}

describe("PlatformLogMiddleware", () => {
  describe("use()", () => {
    describe("when no debug, logRequest", () => {
      beforeEach(() =>
        PlatformTest.create({
          logger: {debug: false, logRequest: true}
        })
      );
      afterEach(() => PlatformTest.reset());
      it("should configure request and create context logger", async () => {
        // GIVEN
        const {request, ctx, service} = await createServiceFixture();
        request.originalUrl = "originalUrl";
        // WHEN
        service.$onRequest(ctx);

        // THEN
        service.$onResponse(ctx);

        // THEN
        expect(PlatformTest.injector.logger.info).toHaveBeenCalledWith(
          expect.objectContaining({
            event: "request.start",
            method: "GET",
            reqId: "id",
            url: "originalUrl"
          })
        );
        expect(PlatformTest.injector.logger.info).toHaveBeenCalledWith(
          expect.objectContaining({
            event: "request.end",
            method: "GET",
            reqId: "id",
            url: "originalUrl",
            status: 200
          })
        );
        expect(PlatformTest.injector.logger.info).toHaveBeenCalledWith(
          expect.objectContaining({
            duration: expect.any(Number)
          })
        );
        expect(PlatformTest.injector.logger.info).toHaveBeenCalledWith(expect.objectContaining({time: expect.any(Date)}));
      });
    });
    describe("when debug, logRequest", () => {
      beforeEach(() =>
        PlatformTest.create({
          logger: {
            level: "debug",
            logRequest: true
          }
        })
      );
      afterEach(() => PlatformTest.reset());

      it("should configure request and create context logger (debug, logRequest)", async () => {
        // GIVEN
        const {request, ctx, service} = await createServiceFixture();

        // WHEN
        service.$onRequest(ctx);

        // THEN
        service.$onResponse(ctx);

        // THEN
        expect(PlatformTest.injector.logger.debug).toHaveBeenCalledWith(
          expect.objectContaining({
            event: "request.start",
            method: "GET",
            reqId: "id",
            url: "url"
          })
        );
        expect(PlatformTest.injector.logger.debug).toHaveBeenCalledWith(
          expect.objectContaining({
            event: "request.end",
            method: "GET",
            reqId: "id",
            url: "url",
            status: 200,
            data: "test"
          })
        );
      });
    });
    describe("when no debug, logRequest, logEnd", () => {
      beforeEach(() =>
        PlatformTest.create({
          logger: {debug: false, logRequest: true, logEnd: false}
        })
      );
      afterEach(() => PlatformTest.reset());
      it("should configure request and create context logger ()", async () => {
        // GIVEN
        const {request, ctx, service} = await createServiceFixture();
        request.originalUrl = "originalUrl";

        // WHEN
        service.$onRequest(ctx);

        // THEN
        service.$onResponse(ctx);

        // THEN
        expect(PlatformTest.injector.logger.info).toHaveBeenCalledWith(
          expect.objectContaining({
            event: "request.start"
          })
        );
      });
    });
    describe("when no debug, logRequest, logEnd", () => {
      beforeEach(() =>
        PlatformTest.create({
          logger: {
            debug: false,
            logRequest: true,
            logStart: false
          }
        })
      );
      afterEach(() => PlatformTest.reset());
      it("should configure request and create context logger (no debug, logRequest, logStart)", async () => {
        // GIVEN
        const {request, ctx, service} = await createServiceFixture();

        // WHEN
        service.$onRequest(ctx);

        // THEN
        service.$onResponse(request.$ctx as any);

        // THEN
        expect(PlatformTest.injector.logger.info).toHaveBeenCalledWith(
          expect.objectContaining({
            event: "request.end",
            method: "GET",
            reqId: "id",
            url: "url",
            status: 200
          })
        );
      });
    });
  });
});
