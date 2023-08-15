export default function useEvents(...eventsNames ){
    const events = {}
    eventsNames.forEach(eventName =>{
        events[eventName] = {
            listeners : [] ,
        }
    });
    const emit = (eventName , ...params)=>{
        if(events[eventName]?.listeners?.length)
            events[eventName].listeners.forEach(listener =>{
                listener(...params);
            })
    }
    const addEventListener = ( eventName  , listener )=>{
        events[eventName].listeners.push(listener);
    }
    const removeEventListener = (eventName , listener ) =>{
        const index =  events[eventName].listeners.indexOf(listener)
        if(index != -1)
            events[eventName].listeners.splice( index , 1 )
    }
    return {
        emit ,
        addEventListener ,
        removeEventListener ,
    }
}