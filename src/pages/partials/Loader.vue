<script>

export default {
  
  name: 'Loader',
  
}
</script>

<template>
  <div class="loader">

  </div>
</template>

<style lang="scss" scoped>

// .loader {
//   height: 40px;
//   aspect-ratio: 2;
//   --c:no-repeat linear-gradient(#25b09b 0 0);
//   background: var(--c),var(--c),var(--c),var(--c);
//   background-size: 26% 50%;
//   animation: l18 1s infinite cubic-bezier(0.5,150,0.5,-150);
// }

// @keyframes l18 {
//     0%   {background-position: calc(0*100%/3) 50%, calc(1*100%/3) 50%  , calc(2*100%/3) 50%  , calc(3*100%/3) 50%}
//     100% {background-position: calc(0*100%/3) 51%, calc(1*100%/3) 50.5%, calc(2*100%/3) 49.5%, calc(3*100%/3) 49%}
// }

/* HTML: <div class="loader"></div> */

.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {to{transform: rotate(1turn)}}
</style>