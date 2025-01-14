import {AnyPromiseResult, AnyToPromise, AnyToPromiseStatus} from "@tsed/core";
import {PlatformContext} from "./PlatformContext";

/**
 * @ignore
 */
export interface HandlerContextOptions {
  $ctx: PlatformContext;
  err?: any;
}

export class AnyToPromiseWithCtx extends AnyToPromise {
  public $ctx: PlatformContext;
  public err: unknown;

  constructor({$ctx, err}: HandlerContextOptions) {
    super();
    this.$ctx = $ctx;
    this.err = err;
  }

  isDone(): boolean {
    const {$ctx} = this;

    if (!$ctx?.isDone()) {
      if ($ctx?.request.isAborted() || $ctx?.response.isDone()) {
        this.destroy();

        if (this.status === AnyToPromiseStatus.PENDING) {
          this.status = AnyToPromiseStatus.RESOLVED;
        }
      }
    }

    return super.isDone();
  }

  async call(cb: Function): Promise<AnyPromiseResult<any>> {
    return super.call(() => cb(this));
  }

  destroy() {
    // @ts-ignore
    delete this.$ctx;
  }

  isCanceledResponse(process: any) {
    return process === this.$ctx.getResponse();
  }
}
