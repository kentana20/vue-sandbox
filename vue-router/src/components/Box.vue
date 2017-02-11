<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="thumbnail">
        <a :href="hotel.hotel[0].hotelBasicInfo.hotelInformationUrl" target="_blank">
          <img :src="hotel.hotel[0].hotelBasicInfo.hotelImageUrl" alt="" />
        <div class="caption">
        <h3>{{hotel.hotel[0].hotelBasicInfo.hotelName}}</h3>
        </a>
        <p>{{hotel.hotel[0].hotelBasicInfo.hotelSpecial}}</p>
        <p>
          最安料金(1人当たり): ¥{{hotel.hotel[0].hotelBasicInfo.hotelMinCharge.toLocaleString()}}~ |
          スコア: {{hotel.hotel[0].hotelBasicInfo.reviewAverage}}
        </p>
      </div>
    </div>
<!--      <img :src="gif.images.fixed_height.url" alt="" /> -->
<!--      <span class="filename">{{gif.slug}}</span> -->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      hotel: Object,
    },
  };
</script>
