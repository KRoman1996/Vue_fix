<template>
  <div>
    <div class="bg-about md:h-about bg-cover w-full">
      <navbar class="pt-4" />
      <div class="flex justify-center">
        <p class="text-6xl text-white font-titilium font-bold mt-20 uppercase">
          About Us
        </p>
      </div>
    </div>
    <div class="flex justify-center my-10">
      <div>
        <p class="text-4xl text-white font-titilium font-bold uppercase">Welcome</p>
        <hr
          class="bg-gradient-to-r from-purple-900 via-blue-700 to-blue-300 w-32 h-2 border border-none"
        />
      </div>
    </div>
    <div class="container mx-auto mt-10">
      <div class="mx-8 md:mx-16 font-openSans">
        <p class="text-white py-2">
          No name 1 was launched a few years back with a unique vision to provide
          unparalleled advanced trading conditions, advanced education, and
          state-of-the-art trading tools in the forex industry. Due to the continuous
          focus on localizing our products and services to suit each market, together with
          our successful collaboration with talented and experienced teams from all over
          the world. No name 1 was quickly established as the global trademark it is
          today.
        </p>
        <p class="text-white py-2">
          Our number one mission is centered on time. By valuing time and understanding
          the importance of efficiency in the fluctuating, lightning-fast world of
          financial markets, every decision we make is designed to ensure that our clients
          and business partners, as well as our team of professionals, invest their time
          wisely.
        </p>
        <p class="text-white py-2">
          This road is paved by an ironclad focus on educating our customers. Knowledge is
          power, and empowering traders to get the best value for their investments is our
          passion.
        </p>
        <p class="text-white py-2">
          At No name 1 we are committed to making sure all our clients and investors stay
          connected to the various opportunities that arise in the market on a daily basis
          and ease in connecting with one another. With No name 1 has your financial
          stockbroker you are sure to get all the professional backing and support you
          require to soar in Forex trading.
        </p>
      </div>
    </div>
    <div class="flex justify-center mt-16">
      <p class="text-5xl text-white font-semibold font-titilium uppercase">Contact Us</p>
    </div>
    <div class="mt-10 mx-10 font-openSans block md:hidden">
      <div class="flex space-x-4">
        <img :src="mail" alt="" />
        <div class="text-white">
          <p class="font-bold">Support email:</p>
          <p>support@noname1.com</p>
        </div>
      </div>
      <div class="flex space-x-4 mt-2">
        <img :src="clock" alt="" />
        <div class="text-white">
          <p class="font-bold">Monday to Friday:</p>
          <p>9:30-21:00 GMT</p>
        </div>
      </div>
      <div class="flex space-x-4 mt-2">
        <img :src="phone" alt="" />
        <div class="text-white">
          <p class="font-bold">Telephone number:</p>
          <p>+357 00 000 000</p>
        </div>
      </div>
    </div>
    <div class="md:grid md:grid-cols-2 md:gap-10 mt-10 mx-16 md:mx-32 hidden">
      <div class="hidden md:flex justify-end">
        <img :src="contact" alt="" />
      </div>
      <div class="mt-10 font-openSans">
        <div class="flex space-x-4">
          <img :src="mail" alt="" />
          <div class="text-white">
            <p class="font-bold">Support email:</p>
            <p>support@noname1.com</p>
          </div>
        </div>
        <div class="flex space-x-4 mt-2">
          <img :src="clock" alt="" />
          <div class="text-white">
            <p class="font-bold">Monday to Friday:</p>
            <p>9:30-21:00 GMT</p>
          </div>
        </div>
        <div class="flex space-x-4 mt-2">
          <img :src="phone" alt="" />
          <div class="text-white">
            <p class="font-bold">Telephone number:</p>
            <p>+357 00 000 000</p>
          </div>
        </div>
      </div>
    </div>
    <Footer class="mt-32" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import contact from "@/assets/images/ContactUs .png";

import mail from "@/assets/images/mail.svg";
import clock from "@/assets/images/clock.svg";
import phone from "@/assets/images/phone.svg";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      contact,
      mail,
      clock,
      phone,
    };
  },
};
</script>

<style lang="scss" scoped></style>
