import {Constant, DIContext, Injectable} from "@tsed/di";
import type {LoggerRequestFields} from "../domain/PlatformLogMiddlewareSettings";

/**
 * @platform
 */
@Injectable()
export class PlatformLogRequest {
  @Constant("logger.requestFields", ["reqId", "method", "url", "duration"])
  protected requestFields: LoggerRequestFields;

  @Constant("logger.logRequest", true)
  protected logRequest: boolean;

  @Constant("logger.logStart", true)
  protected logStart: boolean;

  @Constant("logger.logEnd", true)
  protected logEnd: boolean;

  @Constant("logger.level")
  protected logLevel: string;

  @Constant("debug")
  protected debug: boolean;

  /**
   * Handle the request.
   */
  public $onRequest(ctx: DIContext): void {
    this.configureRequest(ctx);
    this.onLogStart(ctx);
  }

  /**
   * Handle the response.
   */
  public $onResponse(ctx: DIContext): void {
    this.onLogEnd(ctx);
  }

  /**
   * The separate onLogStart() function will allow developer to overwrite the initial request log.
   * @param ctx
   */
  protected onLogStart(ctx: DIContext) {
    const {debug, logRequest, logStart} = this;

    if (logStart) {
      if (debug) {
        ctx.logger.debug({
          event: "request.start"
        });
      } else if (logRequest) {
        ctx.logger.info({
          event: "request.start"
        });
      }
    }
  }

  /**
   * Called when the `$onResponse` is called by Ts.ED (through Express.end).
   */
  protected onLogEnd(ctx: DIContext) {
    const {debug, logRequest, logEnd} = this;

    if (logEnd) {
      if (debug) {
        ctx.logger.debug({
          event: "request.end",
          status: ctx.response.statusCode,
          data: ctx.data
        });
      } else if (logRequest) {
        ctx.logger.info({
          event: "request.end",
          status: ctx.response.statusCode
        });
      }
    }

    ctx.logger.flush();
  }

  /**
   * Attach all information that will be necessary to log the request. Attach a new `request.log` object.
   */
  protected configureRequest(ctx: DIContext) {
    ctx.logger.minimalRequestPicker = (obj: any) => ({...this.minimalRequestPicker(ctx), ...obj});
    ctx.logger.completeRequestPicker = (obj: any) => ({...this.requestToObject(ctx), ...obj});
  }

  /**
   * Return complete request info.
   * @returns {Object}
   * @param ctx
   */
  protected requestToObject(ctx: DIContext): any {
    const {request} = ctx;

    return {
      method: request.method,
      url: request.url,
      headers: request.headers,
      body: request.body,
      query: request.query,
      params: request.params
    };
  }

  /**
   * Return a filtered request from global configuration.
   * @returns {Object}
   * @param ctx
   */
  protected minimalRequestPicker(ctx: DIContext): any {
    const {requestFields} = this;
    const info = this.requestToObject(ctx);

    return requestFields!.reduce((acc: any, key: string) => {
      acc[key] = info[key];

      return acc;
    }, {});
  }
}
