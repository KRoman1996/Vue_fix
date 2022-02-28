<template>
  <div>
    <div class="bg-gradient-to-r from-purple-800 to-green-900 block md:hidden">
      <navbar class="pt-4" />
      <div class="flex justify-center py-20">
        <p class="text-5xl text-white font-titilium font-bold uppercase">Platforms</p>
      </div>
    </div>
    <navbar class="pt-4 hidden md:block" />
    <div class="hidden md:flex justify-center">
      <p class="text-5xl text-white font-titilium font-bold uppercase mt-10">Platforms</p>
    </div>
    <div class="flex justify-center my-6">
      <div>
        <p class="text-3xl text-white font-titilium font-bold uppercase">Web Trader</p>
        <hr
          class="bg-gradient-to-r from-purple-900 via-blue-700 to-blue-300 w-32 h-1 border border-none"
        />
      </div>
    </div>
    <div class="block md:hidden mx-10">
      <div class="mt-10"><img :src="webtrader" alt="" /></div>
      <div class="flex justify-center">
        <button
          class="my-5 mt-5 text-black bg-white px-10 py-0 rounded uppercase font-titilium font-bold h-12"
        >
          <div class="flex">
            <svg
              class="mr-2 w-6 h-6"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5006 1.66699H2.50065C1.58398 1.66699 0.833984 2.41699 0.833984 3.33366V13.3337C0.833984 14.2503 1.58398 15.0003 2.50065 15.0003H8.33398V16.667H6.66732V18.3337H13.334V16.667H11.6673V15.0003H17.5006C18.4173 15.0003 19.1673 14.2503 19.1673 13.3337V3.33366C19.1673 2.41699 18.4173 1.66699 17.5006 1.66699ZM17.5006 13.3337H2.50065V3.33366H17.5006V13.3337Z"
                fill="#907BE8"
              />
            </svg>
            Web Trader
          </div>
        </button>
      </div>
    </div>
    <div class="container mx-auto text-white">
      <div class="mx-10 md:mx-32 mt-4 font-openSans font-thin">
        <p>
          No Name 1 highest purpose is to turn its clients into successful traders and
          increase their success rates as much as possible. For that purpose we give you
          the No name 1 Online trader, which enables you to be 100% involved in the
          trading process and adjust according to the market conditions, all the while
          letting you plan your trading activities to your preference.
        </p>
        <p class="mt-4">
          Utilize the full scope of the latest technological developments in the field by
          trading from any internet connectible device. Investing in Forex, Commodities
          and CFD has never been easier thanks to the No name 1 Online Trader.
        </p>
      </div>
         <div class="block md:hidden mt-4">
            <p class="font-titilium font-bold text-xl mx-10">
              Some of the other pros of the platform are:
            </p>
            <div class="flex mx-12">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Instant Execution.</p>
            </div>
            <div class="flex mx-12">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Automated Trading.</p>
            </div>
            <div class="flex mx-12">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Secure Application.</p>
            </div>
            <div class="flex mx-12">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Advanced charts availability.</p>
            </div>
            <div class="flex mx-12">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Slippage protection.</p>
            </div>
            <div class="flex mx-12">
              <img :src="bulletin" alt="" />
              <p class="ml-2">3rd party bridging.</p>
            </div>
            <div class="flex mx-12">
              <img :src="bulletin" alt="" />
              <p class="ml-2">
                Availability of four pending orders <br />
                Buy Limit, Buy Stop, Sell Limit, Sell Stop.
              </p>
            </div>
            <div class="flex mx-12">
              <img :src="bulletin" alt="" />
              <p class="ml-2">0.01 lot sizes.</p>
            </div>
            <div class="flex mx-12">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Partial closing and many others.</p>
            </div>
            </div>
    </div>
    <div class="hidden md:block bg-background w-full my-16">
      <div class="container mx-auto pb-16 pt-4">
        <div class="mx-16 grid grid-cols-2 gap-10">
          <div class="mt-16"><img :src="webtrader" alt="" /></div>
          <div class="text-white mt-16">
            <div>
            <p class="font-titilium font-bold text-xl">
              Some of the other pros of the platform are:
            </p>
            <div class="flex mx-8">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Instant Execution.</p>
            </div>
            <div class="flex mx-8">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Automated Trading.</p>
            </div>
            <div class="flex mx-8">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Secure Application.</p>
            </div>
            <div class="flex mx-8">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Advanced charts availability.</p>
            </div>
            <div class="flex mx-8">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Slippage protection.</p>
            </div>
            <div class="flex mx-8">
              <img :src="bulletin" alt="" />
              <p class="ml-2">3rd party bridging.</p>
            </div>
            <div class="flex mx-8">
              <img :src="bulletin" class="mb-6" alt="" />
              <p class="ml-2">
                Availability of four pending orders <br />
                Buy Limit, Buy Stop, Sell Limit, Sell Stop.
              </p>
            </div>
            <div class="flex mx-8">
              <img :src="bulletin" alt="" />
              <p class="ml-2">0.01 lot sizes.</p>
            </div>
            <div class="flex mx-8">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Partial closing and many others.</p>
            </div>
            </div>
            <div class="flex ml-10 mt-4">
              <button
                class="hidden md:block text-black bg-white px-10 py-0 rounded uppercase font-titilium font-bold h-12"
              >
                <div class="flex">
                  <svg
                    class="mr-2 w-6 h-6"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5006 1.66699H2.50065C1.58398 1.66699 0.833984 2.41699 0.833984 3.33366V13.3337C0.833984 14.2503 1.58398 15.0003 2.50065 15.0003H8.33398V16.667H6.66732V18.3337H13.334V16.667H11.6673V15.0003H17.5006C18.4173 15.0003 19.1673 14.2503 19.1673 13.3337V3.33366C19.1673 2.41699 18.4173 1.66699 17.5006 1.66699ZM17.5006 13.3337H2.50065V3.33366H17.5006V13.3337Z"
                      fill="#907BE8"
                    />
                  </svg>
                  Web Trader
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="mx-10 md:mx-16 md:grid grid-cols-2 gap-20 mt-10">
        <div class="text-white font-openSans font-thin">
          <p>
            No name 1 grants you a gateway to all your trading needs with the online and
            mobile trading applications. They are extremely intuitive and functional,
            enabling you to start a trade whenever you want, from anywhere in the world.
            In case you already have a trading account you can start a trade immediately.
          </p>
          <p class="py-4">
            The No name 1 Online Trader present clients with the option to choose from a
            number of languages, it features the latest charts, fast operation of the
            trades, and best of all, it makes everything easy. You have the ability to
            access to trader from a number of different devices such as Apple or Android
            phone, tablet or PC. The platform is easy to use on every device and you can
            handle your investments with just a few clicks.
          </p>
          <p class="pb-4">
            Due to the intuitiveness and easiness of use, the No name 1 Online trader will
            make sure that you are fully informed about all trades that interest you. Stay
            knowledgeable on the latest market news and trends, without having to leave
            your couch.
          </p>
          <p class="pb-4">
            The financial market can be very volatile and the conditions can change in a
            matter of minutes. Therefore, you need to be able to react quickly in such
            cases. With the No name 1 Online Trader, you act accordingly and access your
            trades at any moment. The advantage is in your hands.
          </p>
        </div>
        <div class="text-white font-openSans font-thin">
          <p class="pb-4">
            With the hastened pace of modern life, you need to be constantly on the go,
            but the platform lets you combine that with your trading needs, without having
            to compromise. It`s accessible from any browser, there is no need for you to
            be stuck to any specific place. Be it in your office, or from a friend`s PC,
            logging into your account and trading or just checking something is quick and
            simple.
          </p>
          <p class="mt-8 md:mt-10">
            Using No name 1 to trade is like a walk in the park.
          </p>
          <div class="mt-1">
            <p class="text-base font-bold">It allows you to:</p>
            <div class="flex mx-8 mt-2">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Have full control over your profile.</p>
            </div>
            <div class="flex mx-8 my-3">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Perform in-depth market analysis</p>
            </div>
            <div class="flex mx-8">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Invest in a wide selection of assets.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="mt-20" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import webtrader from "@/assets/images/webTrader.png";
import bulletin from "@/assets/images/bulletin.svg";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      webtrader,
      bulletin,
    };
  },
};
</script>

<style lang="scss" scoped></style>
