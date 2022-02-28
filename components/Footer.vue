<template>
  <div class="bg-black">
    <div class="pt-20">
      <hr class="h-0.5 bg-white w-full" />
    </div>
    <div class="container mx-auto my-3">
      <div class="md:mx-40 mx-2 md:grid md:grid-cols-4 text-white text-center uppercase">
        <p @click="$router.push('/about')" class="text-lg font-titilium font-bold cursor-pointer">About US</p>
        <p @click="$router.push('/trading')" class="text-lg font-titilium font-bold cursor-pointer">ACCOUNT</p>
        <p @click="$router.push('/platforms')" class="text-lg font-titilium font-bold cursor-pointer">PLatforms</p>
        <div class="block md:hidden">
          <p @click="$router.push('/privacy')" class="text-lg font-titilium font-bold cursor-pointer">Privacy Policy</p>
          <p @click="$router.push('/terms-and-conditions')" class="text-lg font-titilium font-bold cursor-pointer">Terms and Conditions</p>
        </div>
        <p @click="$router.push('/terms-and-conditions')" class="hidden md:block text-lg font-titilium font-bold cursor-pointer">Resources</p>
      </div>
    </div>
    <div class="mt-10 mx-6 block md:hidden">
      <p class="text-lg font-titilium font-bold text-white">Risk Warning:</p>
      <p class="text-sm font-titilium text-white">
        Trading in Forex and CFDs carries a high level of risk and can result in the loss
        of part or all of your investment. Trading in Forex and CFDs may not be
        appropriate for all investors. You should be aware of all the risks associated
        with Forex and CFD trading and seek for independent advice. Past performance does
        not constitute a reliable indication of future results. Forecasts for the future
        do not constitute a reliable indicator of future performance. Copyright for the
        pages and for the screens displaying the pages, and for the information, material
        and their arrangement, is owned by No name 1 all rights reserved. This information
        is intended for investors outside the United States who are not US/Japanese
        citizens and residents. This website is intended for informational purposes only.
        This website is not directed at any jurisdiction and is not intended for any use
        that would be contrary to local law or regulation. The products described on this
        are not offered and may not be sold in the United States/Japan or to US/Japanese
        citizens and residents.
      </p>
    </div>
    <div class="">
      <hr class="h-0.5 bg-white w-full mt-4 md:mt-0" />
    </div>
    <div class="container mx-auto my-3 hidden md:block">
      <div class="mx-40 grid grid-cols-4 text-white text-center uppercase">
        <div class="">
          <p @click="$router.push('/about')" class="text-sm font-titilium cursor-pointer">About Us</p>
          <p @click="$router.push('/about#contact')" class="text-sm font-titilium cursor-pointer">CONTACT Us</p>
        </div>
        <div>
          <p @click="$router.push('/trading')" class="text-sm font-titilium cursor-pointer">TRADING ACCOUNTS</p>
          <p @click="$router.push('/trading#segregated')" class="text-sm font-titilium cursor-pointer">SEGREGATED ACCOUNTS</p>
          <p @click="$router.push('/trading#funding')" class="text-sm font-titilium cursor-pointer">ACCOUNT FUNDING</p>
          <p @click="$router.push('/trading#faq')" class="text-sm font-titilium cursor-pointer">ACCOUNT FAQ</p>
        </div>
        <div>
          <p @click="$router.push('/platforms')" class="text-sm font-titilium cursor-pointer">WEB TRADER</p>
        </div>
        <div>
          <p @click="$router.push('/terms-and-conditions')" class="text-sm font-titilium cursor-pointer">Terms and conditions</p>
          <p @click="$router.push('/privacy')" class="text-sm font-titilium cursor-pointer">Privacy Policy</p>
        </div>
      </div>
      <div class="mt-10 mx-40 hidden md:block">
        <p class="text-lg font-titilium font-bold text-white">Risk Warning:</p>
        <p class="text-sm font-titilium text-white">
          Trading in Forex and CFDs carries a high level of risk and can result in the
          loss of part or all of your investment. Trading in Forex and CFDs may not be
          appropriate for all investors. You should be aware of all the risks associated
          with Forex and CFD trading and seek for independent advice. Past performance
          does not constitute a reliable indication of future results. Forecasts for the
          future do not constitute a reliable indicator of future performance. Copyright
          for the pages and for the screens displaying the pages, and for the information,
          material and their arrangement, is owned by No name 1 all rights reserved. This
          information is intended for investors outside the United States who are not
          US/Japanese citizens and residents. This website is intended for informational
          purposes only. This website is not directed at any jurisdiction and is not
          intended for any use that would be contrary to local law or regulation. The
          products described on this are not offered and may not be sold in the United
          States/Japan or to US/Japanese citizens and residents.
        </p>
      </div>
    </div>
    <div class="py-6">
         <div class="bg-white w-full h-10">
      <div class="container mx-auto">
        <div class="mx-6 md:mx-40">
          <p class="text-black pt-2 font-openSans text-sm md:text-lg font-bold">
            © 2021 ALL right reserved No name 1
          </p>
        </div>
      </div>
    </div>
    </div>
 
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
