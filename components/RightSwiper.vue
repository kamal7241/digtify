<template>
        <native-swiper :slide="slide" :imgs="imgs" class="swiper--right  mb-5"  :src="'rightSwiper'"/>
</template>
<script>
import img1 from "../assets/image/rightSwiper/1.png"
import img2 from "../assets/image/rightSwiper/2.png"
import img3 from "../assets/image/rightSwiper/3.png"
import img4 from "../assets/image/rightSwiper/4.png"
import img5 from "../assets/image/rightSwiper/5.png"
import img6 from "../assets/image/rightSwiper/6.png"
import img7 from "../assets/image/rightSwiper/7.png"
import img8 from "../assets/image/rightSwiper/8.png"
import img9 from "../assets/image/rightSwiper/9.png"
import img10 from "../assets/image/rightSwiper/10.png"
import img11 from "../assets/image/rightSwiper/11.png"
import img12 from "../assets/image/rightSwiper/12.png"
import img13 from "../assets/image/rightSwiper/13.png"
import img14 from "../assets/image/rightSwiper/14.png"
import img15 from "../assets/image/rightSwiper/15.png"
import img16 from "../assets/image/rightSwiper/16.png"
import img17 from "../assets/image/rightSwiper/17.png"
import img18 from "../assets/image/rightSwiper/18.png"
import img19 from "../assets/image/rightSwiper/19.png"
import img20 from "../assets/image/rightSwiper/20.png"
import img21 from "../assets/image/rightSwiper/21.png"
import img22 from "../assets/image/rightSwiper/22.jpeg"
const imgs = [
img1 , img2 , img3 , img4 , img5 , img6 , img7 , 
img8 , img9 , img10 , img11 , img12 , img13 , img14 , img15 , img16 , img17 , img18  , img19 , img20 , img21 , img22 
]
export default defineNuxtComponent({
props:['slide'],
computed:{
imgs(){
return imgs
}
}
})

</script>