<template>
  <div class="apps">
    <div class="apps-hd">
      <div class="apps-hd-title">阿里APP</div>
      <div class="apps-hd-more">
        <a href="https://www.taobao.com/tbhome/page/app-lists?spm=a21bo.7723600.8219.1.QMeAZM">
          更多
          <i class="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
    <div class="apps-bd">
      <div
        class="apps-bd-item"
        v-for="(app, index) in appsData"
        :key="`apps-item-${index}`"
      >
        <a :href="app.href">
          <img :src="app.src" :alt="`手机app - ${app.alt}`" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appsData: [
        {
          href: "https://mpage.taobao.com/hd/download.html",
          src:
            "data:image/webp;base64,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",
          alt: "淘宝"
        },
        {
          href: "https://www.tmall.com/wow/portal/act/app-download",
          src:
            "data:image/webp;base64,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",
          alt: "天猫"
        },
        {
          href: "https://ju.taobao.com/tool/downApp.htm",
          src:
            "data:image/webp;base64,UklGRrwEAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSNcAAAANz8GgbSRH57nv/Z8/2F8WEZHNnyHi88wGgzcm43aqSZ3baJLXYDA/PlFDAJYk2aatWte2bdt7/hO7fu/t/n8R0f/kFUwXM4mQ4cddtsvJ6spHshvGo4USmcKpseGtXMV7IN8YjHhW8ihi/dmQe7KKxvqDTbCHKtqqpyLI8scSOitmEWbjCOMhhCFDaPyr4gydu4TQXXZxdLtFFt1iXDRUbrI+5lHNgtd6K4rm0Oa+GfQNhavxHM76Mfzva7yNBs1cAL+3eYePTf1cyCRChh932S6nQV4AAABWUDggvgMAANASAJ0BKjwAPAA+kUCXSKWkIiEoG/6osBIJbADJvGRO1sz5zEOP0G2g8wH2gcIB/VeoA9ADyy/2S+Cv9wv2q9pa5tdFgiT/H+Vl1d+h4S9I7My8ZWoZ0jvQdPQ6ECxXJzL6ihzp9BH1kimsWNbKtACjfrnqF8xbeucoStbwnvSwLTlZDQxs+XsN/DebZ/v+mTOyZbwCgJRKkSB1jDAYAAD+/pCtcriOsduNFTdTp+eV5s5r8aGSf9yz/u5zP7gJBNRmRb5H8e9ifcS2//7DrXl3RbzOv3Gf94z/OfdW/466IRRgAypADHgNsa+3fw6fJ4mk579qCP0FcSd92iDkKmcWoH/8B3HBguo/ZkWU5ReePNc2a8aKsCQBBwkXYShT7mgwnEDlgbmV/yCunZrzf8pDnSgHtiI8GKWW38/FTwNx9otkRUuJ9imbYOn+1/JNa/LzjMuUn+tLY+f/A6dbYctmc40NEdWqsUg4CcKZiGhDk1oewtY5RHQD3t4tFDrwB0j5mfenAmEXkVka5Uj+PEqGb4pz3JKwKI77zjNOWSas4/C56VRZ8POP0XL8JrmPKUdxlgKEEvKEv33HtmmCf02BgOrINpAkM+Pq0d82Vs2qz9+8KB8GpnmPDBVNaIzze2jDuRKvzfdSkOyTgkABVUm9oWTqEsrKwfV5d4wGrTGIaTtD7RFaftj72KOERAUXsJlF80OPQRBbfa1vUZa+TkixZ2BSYnFYDYpMke3M/adcvsallRByw3yKFJrwT/Pb+krn+CdoGYSHbnyMxvV8/Po0z6MP+Wg11g2pOpymYCaG+/G9fdwYUzHjMDGEHn65q6pprlE0ZEogU8/aNTMJdDxZZ+KsicW40dxzEGB7vcUfH/L7Nk9nZ+DQEubfNMaXIOcaczO/RYaSaeeS6Wl14mo40Fe2Zfgr2CnH+iJYc5RV1tmgiA3qHb8t7/3N0m03pRJ+w+G5oHJc0gdhFqPu9UejjMi9zd/o/Zmf5YO8NzmfHJtkZKZp9P28W3Qk7qoaEuaxOFG6I5x97XyoO1Khf76jHV+suKpkiJ+hy6tJS5TsL7kT3Lqmy1BHL58d102Q6Mv2xQWx8Tl0+PKuTsQDZ8+/cEt81WPc9nOk+e6o8s9aNe7ZHmbbWBZQ31QqNCGUl3APHpzVW5wCFaDh7I4yGmeJkVnqxK0Q+sWJEXZA1HuuG1PuspuVGuYfSrrLqhf+n5EE73V12Dog5GuNUI0F2MC/oVQQ0EV0yWf0CKS7uMadC1sVJj//nxVGCxgAAAA=",
          alt: "聚划算"
        },
        {
          href: "https://mobile.alipay.com/index.htm",
          src:
            "data:image/webp;base64,UklGRgAEAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSHwAAAABT6AmAJA2yoZrtiCCaYyIACzbn+8CTmvbjqq3UgMLnS7QODpgIXH4+fu5gAyn2+By/RcR/U8r/Z6p+o2N3f5N9eKsrAid+YTwcDNS+0QaAtKUkB4Z6cdfXUb6JaRHQJqeSMOM1PqE8HC2InRW/Jvqxdnd75mq39hYAQAAVlA4IF4DAACwEwCdASo8ADwAPok0l0elIqIhMBgO+KARCWwAyB3A2X4bfO/xa/GPrq9sHzTwNuv1AflX/gdMd+gHuA/aD1Afxz+y/tF7yPoW/xnpGdQB6AHSl/u96U7wAcIKpmpY+TN7h+qqM4ubmG0ibBoLmlceXOfIo1GB/JWlEudV+hsr7TReEdtF0wwDPiYyc+UbAImXs8SWeQZwifHtnxT/I9qz9KyhuRpgAP78Dxd8z1Vb9U2kwkidDgtf7DFdtwP4K0aa3/+e9SHl/j0Sg/7fSBX/9kENOfG2BdkMHdb9gsAzQuvoY/QPaf82UlHGNsmN+D5d6ek42ZH9CPwLH2rz7+rC8ZV9CgNcfWUipMaFt6E3ibUUc9EEs2+IvRDf+Jh9fgpQIvw+4KU26J84baTcd1Sxff6CXuuZ3jrGAL7kG4we1j9pNJd1HTUzuon8cCeH24QYKsFiHQMceVDAcM2ncC2PKGFAnmRyrP7gz9VbqLO1U4tR2Nrseb97L8ZlZbMI6/rtCYycK7HzliXWoFKZtQ0Q1lf04Z8xwfkgVJhRD7amTUS3k39GoKRZK7HseimRPn6IdciQ4Mayeb7NV7divHxrqBIeWuYoSx5Jl2JB7Legtf6lnz66P9prafB+Egk+CkPgMf/9mQEqrf12NYigDLeLumA606lzar3axkXDx3yVW0GUJMoIeHmKiDF9VUBXFAWDolXLOA4YFN6Ha5XyYYXejO2M5t4DRXVmt5jd14dLKgyuJny4sSriJxnWN12nBissK9y0f8yD0bRMy60iACxIen9YeRUw0RhKYoJQLc5EsyKhcnFus2LItQTQxL5laAHB1MCbyIe68FRH26JPslw3zvytP42IxDUn0HG9rr79c6YCACTppy/6zbVaOvHcN3NKeu46PX9I3n0kiYr8xK/Uh1m/WWvDB9zr15i3jMz3Sndcug57tORpKnFudPUMaBsl1fFqdu4CYxP2u9mQZqyderFI3v6inLvqbM+50mRzreYHnttgLcf/JY3d73OtUTLoPabMPDtk9n71p2Ne+dtPaiSQFQ3+Jd97McsJKIx4zpruD08IggE2KNnK+nU3yIRlu/i3TUVedAAnfpZoK/KeDelXSxzVB+LTqsT4XZaeUvjl4U6yqNXKw7VsWSAA",
          alt: "支付宝"
        },
        {
          href:
            "https://www.taobao.com/go/market/seller/aliclient/ww/index.php",
          src:
            "data:image/webp;base64,UklGRm4FAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSO0CAAABd8agbSNJl8zxx9zZ945BROTDJ5nSBhkyZZFIXiISGbKXJZGWFGthkaKLiCyySaRltdkl0oYh/yHttm0zlnaSZ5tt27Zt27Zt27Zt213O/k1Vndzk5lbrY0T/E38NrU7NDMRN23p/XfMExKut33y9qV4K4pO6j7EXcyoiLtqA74wFLvfJ1xGHurdphU+NaJwK5aVnafc/ODijcWaiBpXFZ+j4btfYthUSoaz2LbqYr8+u6VkANfpoP93N0NctfSslwHuVO5QMnJ1ZCR6NhqcpH3wyo7IGLx1umPQSOdctBdLJAx/Ro/l+XhYkjVEf6D2ytgKkEge/oYrA7mzIDHlLRWsL4F7nCVV9n5gIt2oXqc7XDi7GsiAVPN7/g9axfDh3DFLS9zZM8WHj9OGf+evHGANOxccp+WlO59U/KazWkHuA1pliOOjDvlNyWzoy11Poi1h/WqHOcMg5TdleiNV8TntjxAp9tDbAoWWQstURS1tu0jaudlF2+nVa93IgLqV0VR2x3p9pN1/ubbqL1rtWEDIvUfritglt8uvfp+CbW7CS1vchEJo8padD5Rdp/zxFN1bQCk2D0OsjvVxtoB2j7du0DCRspmXOhzAqQA8X6mrYQ9uTGogm36JtAYTJJuUftERUP0Hbj+Ea6odomfMgTKX8t6E6oiXXaL/Sou5h2kLTIUwyKR1ZmIxoxzcUHj6I0OYbBWGkn/If26eWbo/Q/VMXCL0+0cOLZfsjlHhVC0KzZ1R+MwVC3jUqXwJR20jVZmc4dDKp+GIpHIrvUW1odhIcEqYFqfROLTjWvk2lszU4GmMiVGdeKYNLxkmqe91Nh4vW+g5VBaekwFXr+pFqfKuSIGGM/0IV4XUlkErs/4zePy1KgKTR4y69vh+eBWmt0rpP9PJ5Rx0dXjIHnqF06PygHHjU8/odfROme+jJke55OhSkdZh18oNJp/CTHVMapUBVYlH1HtM3nrz2IHrj/M7Fw5tXzjHwXwAAAABWUDggWgIAAHAPAJ0BKjwAPAA+hTSVR6UjIiE59OqooBCJbADG8Yf+5dYJrDwHDa7Sd995JsvtgPMB0APNr6kPn2vZUwDBig3wNIFMw8Rz3j0AP1VZ9EAsqy7/Na13sOtWGDKvg3z927BHUeklR7VFdIMkgYZryg+mda0huVbKUxeLeWezrWp/wyxWAAD++94SxGdmbXHzjQOlteL+xhPMfwU40n5Fr9kln1JgqxKXhro6NDAyu4wMfsQiIAIKravDThY0fPBaTpZ3G0+4/uDESTEW5r4MTbwqQycJcbV+NHRBc9/PYTOVY2B+h94YIbVngkwjWprpsNPmjnofE/60bRWezaaIecnYcjC7ERzHyvjPsq+1WPqd0Bq029xVJu5bT2xX/wfwHtyO/vfIOXKOrTb9mWPAM/lDgnQNDUXuAvNACY9fwOdR65beAaH19VObGzY8e1CSjIUPTrtwNsyfFQjhffqvVenLwjn+6zccovFEhl1EaayRbSVQiCIOANuaRF2aXvA5rSIKOFkp4k74KxwHyvWyf4wO8oMZgOavvDqhrE/j8nTN6gTPkQ+cYacyjhtsZIp4qepIOfcyVjtDkRQyZ4NFg/L20gGl5+qC9fGcRoo7tT9939AlqCuaEQ3jSlI1IJHmXRx+6ywxQYMZEWTOIU+2Cd+0WgvpWLPBSKJe1JUbEQzMI9iLEeeAO7k31oFrLGPC9FTO0L9zYJklv3FLa2PbQ/V0xiiJoHz4Kj37Dik25kNzvrmBA5vSksCCnraEEAPukIdn8kEHmYiB9haMHsmxDR63JVeRmR7/AAAA",
          alt: "旺旺"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.apps {
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 76px;
  font-size: 14px;
  .apps-hd {
    display: flex;
    justify-content: space-between;
    width: 276px;
    height: 30px;
    padding-left: 12px;
    .apps-hd-title {
      font-weight: bold;
    }
    .apps-hd-more {
      a {
        font-size: 12px;
        text-decoration: none;
        color: #3c3c3c;
        &:hover {
          color: #f40;
          cursor: pointer;
        }
      }
    }
  }
  .apps-bd {
    display: flex;
    justify-content: flex-start;
    padding-left: 23px;
    .apps-bd-item {
      width: 32px;
      height: 32px;
      margin-right: 21px;
      margin-bottom: 8px;
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
}
</style>