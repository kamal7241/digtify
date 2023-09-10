# Syntax 

```ts
// js
const getData = async (text)=>{
    const res = await fetchData()
    return res.myNumber
}

// ts 
const getData = async(test:string):Promise<number> => {

}
```