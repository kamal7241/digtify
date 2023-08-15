import { onMounted, ref, watch} from 'vue';
import useEvents from '../events/useEvents';
export default function useResponsive(){
    const { addEventListener , emit  } = useEvents('breakpoint');
    const isMobile = ref(false);
    const isTablet = ref(false);
  onMounted(()=>{
        const mobileMQL = window.matchMedia('(max-width: 767px)')
        const tabletMQL = window.matchMedia('(max-width: 1024px)')
        mobileMQL.addEventListener('change', onMobileBreakPoint );
        tabletMQL.addEventListener('change', onTabletBreakPoint );
        if(mobileMQL.matches){
            onMobileBreakPoint({matches : mobileMQL.matches});
            return 
        }
        onTabletBreakPoint({matches : tabletMQL.matches});
    })
    const onBreakPoint = (listener  =>{
        addEventListener('breakpoint' , listener )
    })
    const onMobileBreakPoint = (e)=>{
        if(e.matches){
            isMobile.value = true;
            emit('breakpoint' ,'mobile')
        }
        else {
            isTablet.value = true;
            emit('breakpoint' ,'tablet')
        }
    }
    const onTabletBreakPoint = (e)=>{
        if(e.matches){
            isTablet.value = true;
            emit('breakpoint' ,'tablet')
        }
        else {
            isTablet.value = false;
            emit('breakpoint' ,'desktop')
        }
    }

    watch(isMobile , ()=>{
        if(isMobile.value)
            isTablet.value = false;
    })
    watch(isTablet , ()=>{
        if(isTablet.value)
            isMobile.value = false;
    })

    return {
        isMobile ,
        isTablet , 
        onBreakPoint
    }
}