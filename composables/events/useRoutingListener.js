import { onBeforeUnmount  } from 'vue';
import { onBeforeRouteLeave } from 'vue-router'
/**
 * @callback OnRoute~RouteCallback
 * 
 * @typedef {import("vue").Ref} Ref
 * @param {Ref } listen 
 * @param {OnRoute} onRoute  cb on route. return bool
 * @param {bool} confirmLeave 
 */
export default function useRoutingListener( onRoute  , confirmLinksLeave){
    onBeforeRouteLeave(async (to, from) => {
        return await onRoute(to, from);
      });

      onbeforeunload = ()=>{
          if(confirmLinksLeave.value){
            return "are u sure?";
        }
      }

      onBeforeUnmount(()=>{
        onbeforeunload = undefined;
      })


}