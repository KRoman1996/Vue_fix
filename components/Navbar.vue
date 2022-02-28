<template>
  <div class="pt-10">
    <div class="container mx-auto flex justify-between">
      <div class="flex" @click="$router.push('/')">
        <img :src="logo" alt="" class="hidden md:block cursor-pointer" />
        <img :src="logoSmall" alt="" class="visible pl-10 md:hidden cursor-pointer" />
        <div
          class="pl-2 hidden md:block text-white font-titilium text-base sm:text-base md:text-xl font-bold cursor-pointer"
        >
          <p>No name</p>
          <p>Trading</p>
        </div>
      </div>
      <div class="hidden md:flex">
        <div class="flex space-x-6 mt-4">
          <div @click="$router.push('/about')">
            <p
              class="text-white hidden md:block font-titilium font-bold text-base md:text-xl cursor-pointer"
            >
              About Us
            </p>
            <hr
              v-if="$route.path == '/about'"
              class="h-1 bg-white border-none w-16 mt-4 md:mt-0"
            />
          </div>
          <div @click="$router.push('/trading')">
            <p
              class="text-white hidden md:block font-titilium font-bold text-base md:text-xl cursor-pointer"
            >
              Trading
            </p>
            <hr
              v-if="$route.path == '/trading'"
              class="h-1 bg-white border-none w-12 mt-4 md:mt-0"
            />
          </div>

          <div @click="$router.push('/platforms')">
            <p
              class="text-white hidden md:block font-titilium font-bold text-base md:text-xl cursor-pointer"
            >
              Platforms
            </p>
            <hr
              v-if="$route.path == '/platforms'"
              class="h-1 bg-white border-none w-16 mt-4 md:mt-0"
            />
          </div>
        </div>
      </div>
      <div class="flex space-x-2">
        <button
          class="hidden md:block bg-gray-400 px-10 py-0 rounded uppercase font-titilium font-bold h-12 hover:bg-gray-500"
        >
          Login
        </button>
        <button
          class="hidden md:block bg-black border border-gray-400 text-gray-400 w-56 rounded uppercase font-titilium font-bold h-12 hover:bg-gray-800"
        >
          Open Account
        </button>
        <img
          @click="hamburger = !hamburger"
          v-if="!hamburger"
          :src="hamburgerSmall"
          class="pr-10 pb-2 block md:hidden"
          alt=""
        />
        <img
          @click="hamburger = !hamburger"
          v-if="hamburger"
          :src="closeHamburger"
          class="pr-10 pb-2 block md:hidden"
          alt=""
        />
      </div>
    </div>
    <div v-if="hamburger" class="block md:hidden bg-transparent">
      <div>
        <p
          @click="$router.push('/about')"
          class="text-center text-base font-bold text-white"
        >
          About Us
        </p>
      </div>
      <div class="flex justify-center">
        <p
          @click="$router.push('/trading')"
          class="my-2 text-center text-base font-bold text-white"
        >
          Trading
        </p>
      </div>
      <div>
        <p
          @click="$router.push('/platforms')"
          class="text-center text-base font-bold text-white"
        >
          Platforms
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/images/logo.svg";
import logoSmall from "@/assets/images/logoSmall.svg";
import hamburgerSmall from "@/assets/images/hamburgerSmall.svg";
import closeHamburger from "@/assets/images/closeHamburger.svg";
export default {
  data() {
    return {
      logo,
      logoSmall,
      hamburgerSmall,
      closeHamburger,
      hamburger: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
