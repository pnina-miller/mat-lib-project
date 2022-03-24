/*import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouterModule,
  Routes,
  UrlSegment
} from '@angular/router';


export class CustomRouteReuseStrategy implements RouteReuseStrategy {

  private handlers: { [key: string]: DetachedRouteHandle } = {};

  /**
   * Determines if this route (and its subtree) should be detached to be reused later
   * @param route
   *
  shouldDetach(route: ActivatedRouteSnapshot): boolean {

    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return false;
    }
    /** Whether this route should be re used or not *
    let shouldReuse = false;
   console.log(route,'[router-reuse] checking if this route should be re used or not', route);
    if ( route.routeConfig.data ) {
      route.routeConfig.data.reuse ? shouldReuse = true : shouldReuse = false;
    }
    
    return shouldReuse;
  }

  /**
   * Stores the detached route.
   *
  store( route: ActivatedRouteSnapshot, handler: DetachedRouteHandle ): void {
      alert('store')
   console.log(route,'[router-reuse] storing handler');
    if ( handler ) {
      this.handlers[this.getUrl(route)] = handler;
    }
  }

  /**
   * Determines if this route (and its subtree) should be reattached
   * @param route Stores the detached route.
   *
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
   console.log(route,'[router-reuse] checking if it should be re attached');
    return !!this.handlers[this.getUrl(route)];
  }

  /**
   * Retrieves the previously stored route
   *
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return null;
    };

    return this.handlers[this.getUrl(route)];
  }

  /**
   * Determines if a route should be reused
   * @param future
   * @param current
   *
  shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    /** We only want to reuse the route if the data of the route config contains a reuse true boolean *
    let reUseUrl = false;

    if ( future.routeConfig ) {
      if (future.routeConfig.data ) {
        reUseUrl = future.routeConfig.data.reuse;
      }
    }

    const defaultReuse = (future.routeConfig === current.routeConfig);

    // If either of our reuseUrl and default Url are true, we want to reuse the route
    //
    return reUseUrl || defaultReuse;
  }

  /**
   * Returns a url for the current route
   * @param route
   *
  getUrl(route: ActivatedRouteSnapshot): string {
    /** The url we are going to return *
    if ( route.routeConfig ) {
      const url = route.routeConfig.path;
   console.log(route,'[router-reuse] returning url', url);

      return url;
    }
  }
}
*/


import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy  { 
    handlers: { [key: string]: DetachedRouteHandle } = {};

    /** Determines if this route (and its subtree) should be detached to be reused later */
    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
     console.log('shouldDetach ',route.routeConfig.path=='');
        return route.routeConfig.path=='';
    }

    /** Stores the detached route */
    public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.handlers[route.routeConfig?.data?.key || route.routeConfig.path] = handle;
     console.log(' store ',this.handlers,'key',route.routeConfig?.data?.key,'path',route.routeConfig.path);
    }

    /** Determines if this route (and its subtree) should be reattached */
    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
     console.log('shouldAttach ', !!(route?.data?.reuse &&  this.handlers[route.routeConfig?.data?.key || route.routeConfig.path]));
        return !!(route?.data?.reuse &&  this.handlers[route.routeConfig?.data?.key || route.routeConfig.path]);
    }

    /** Retrieves the previously stored route */
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
     console.log(route,'retrieve',this.handlers[route.routeConfig?.data?.key || route.routeConfig.path]);
     if (!route.routeConfig) return null;
    return this.handlers[route.routeConfig?.data?.key || route.routeConfig.path];
    }

    /** Determines if a route should be reused */
    public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
     console.log('f',future,'curr:',curr,'shouldReuseRoute', future.routeConfig === curr.routeConfig);
        
        return future.routeConfig === curr.routeConfig;
    }
}