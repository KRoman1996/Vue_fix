<template>
  <div>
    <!-- Hero -->
    <div v-if="hero" class="hidden md:block bg-hero-image h-hero bg-cover relative">
      <navbar class="pt-4" />
      <div class="grid justify-items-center">
        <div class="container">
          <div class="mx-12">
            <div class="mt-20">
              <p
                class="text-white capitalize font-bold text-3xl sm:text-4xl md:text-6xl font-titilium w-3/4 md:w-2/3 leading-tight"
              >
                TRADE CFDs ON FOREX, COMMODITIES, INDICES, SHARES &#38; CRYPTOS
              </p>
              <button class="btn-hero md:mt-4">OPEN ACCOUNT</button>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 container pb-2">
        <div class="flex justify-center pl-32 space-x-2">
          <div @click="hero = true" class="rounded-full h-4 w-4 bg-white"></div>
          <div @click="hero = false" class="rounded-full h-4 w-4 bg-gray-600"></div>
        </div>
      </div>
    </div>
    <!-- Hero 2 -->
    <div v-if="!hero" class="hidden md:block bg-background h-hero bg-cover relative">
      <navbar class="pt-4" />
      <div class="grid justify-items-center">
        <div class="container">
          <div class="mx-12">
            <div class="grid grid-cols-2">
              <div></div>
              <div class="mt-16">
                <div class="grid grid-cols-2 gap-6">
                  <div class="text-white">
                    <p class="font-titilium font-bold text-xl pb-2 uppercase">Account</p>
                    <p class="font-titilium font-thin text-sm">
                      TRADING ACCOUNTS ACCOUNT
                    </p>
                    <p class="font-titilium font-thin text-sm">SEGREGATED ACCOUNTS</p>
                    <p class="font-titilium font-thin text-sm">FUNDING ACCOUNT</p>
                    <p class="font-titilium font-thin text-sm">FAQ</p>
                  </div>
                  <div class="text-white">
                    <p class="font-titilium font-bold text-xl pb-2 uppercase">Trading</p>
                    <p class="font-titilium font-thin text-sm">FOREX TRADING</p>
                    <p class="font-titilium font-thin text-sm">CFD TRADING</p>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-6 mt-16">
                  <div class="text-white">
                    <p class="font-titilium font-bold text-xl pb-2 uppercase">
                      RESOURSES
                    </p>
                    <p class="font-titilium font-thin text-sm">TERMS AND CONDITIONS</p>
                    <p class="font-titilium font-thin text-sm">PRIVACY POLICY</p>
                    <p class="font-titilium font-thin text-sm">KYC POLICY</p>
                    <p class="font-titilium font-thin text-sm">FAQ</p>
                  </div>
                  <div class="text-white">
                    <p class="font-titilium font-bold text-xl pb-2 uppercase">About</p>
                    <p class="font-titilium font-thin text-sm">ABOUT US</p>
                    <p class="font-titilium font-thin text-sm">CONTACT</p>
                  </div>
                </div>
                <div class="mt-16 text-white">
                  <p class="font-titilium font-bold text-4xl">TRADE CFDs ON FOREX,</p>
                  <p class="font-titilium font-bold text-4xl pl-32">
                    COMMODITIES, INDICES,
                  </p>
                  <div class="flex space-x-4">
                    <p class="font-titilium font-bold text-4xl">SHARES &#38; CRYPTOS</p>
                    <button class="btn-hero">Open Account</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 container pb-2">
        <div class="flex justify-center pl-32 space-x-2">
          <div @click="hero = true" class="rounded-full h-4 w-4 bg-gray-600"></div>
          <div @click="hero = false" class="rounded-full h-4 w-4 bg-white"></div>
        </div>
      </div>
    </div>
    <!-- Hero Mobile -->
    <div class="block md:hidden bg-hero-mobile h-screen bg-cover container mx-auto">
      <navbar class="pt-5" />
      <div class="mt-40 mx-6">
        <p
          class="text-white capitalize font-bold text-3xl sm:text-4xl md:text-6xl font-titilium w-3/4 md:w-2/3 leading-relaxed"
        >
          TRADE CFDs ON FOREX, COMMODITIES, INDICES, SHARES &#38; CRYPTOS
        </p>
        <button class="btn-hero">OPEN ACCOUNT</button>
      </div>
    </div>
    <!-- What We Do -->
    <div class="hidden md:block container mx-auto mt-20">
      <div class="mx-40">
        <div class="flex space-x-4">
          <div>
            <p class="font-titilium font-bold">
              <span class="text-xl md:text-3xl text-what">What </span
              ><span class="text-xl md:text-3xl text-we">We </span
              ><span class="text-xl md:text-3xl text-do">Do </span>
            </p>
          </div>
          <div class="mt-5">
            <hr
              class="bg-gradient-to-r from-purple-900 via-purple-900 to-blue-300 w-32 h-2 border border-none"
            />
          </div>
        </div>

        <div>
          <div class="pt-2 flex justify-center md:block">
            <div>
              <p
                class="uppercase text-white font-titilium font-bold text-3xl sm:text-4xl md:text-6xl leading-stight md:leading-none"
              >
                No Name
              </p>
              <p
                class="text-white uppercase font-titilium font-bold text-3xl sm:text-4xl md:text-6xl leading-stight md:leading-none"
              >
                Trading
              </p>
            </div>
          </div>
          <div class="text-white font-openSans text-center mt-10">
            <p>
              Your goals are unique, so your investment guidance should be too. This is
              why at No name 1 we take the time to listen and understand what matters most
              to you before helping you develop and manage your investment strategy.
            </p>
          </div>
          <div class="f grid col-gap-10 grid-cols-2 mt-20">
            <div>
              <img :src="intuitive" class="" alt="" />
            </div>
            <div class="text-white">
              <p class="font-bold font-titilium text-2xl">
                INTUITIVE TOOLS AND <br />
                COMPETITIVE PRICING
              </p>
              <p class="font-openSans text-sm">
                Whether you’re an active trader or long-term investor our web, mobile, and
                downloadable platforms give you everything you need to research stocks,
                place trades, and manage your portfolio with live-streaming access,
                real-time quotes and specialists with years of floor trading experience.
                As an STP (Straight Through Processing) broker, we do not have any
                conflict of interest regarding our clients’ trades, as we only receive a
                commission on the volume of the trades and do not benefit in any
                additional way by any client losses.
              </p>
            </div>
          </div>
          <div class="f grid col-gap-10 grid-cols-2 mt-20">
            <div class="text-white">
              <p class="font-bold font-titilium text-2xl">
                TRANSPARENT AND <br />TRUSTWORTHY
              </p>
              <p class="font-openSans text-sm">
                For a few years now, No name 1 has been proud to help our clients pursue
                their financial goals while giving them more time to focus on what really
                matters in life. Everything we provide, from guidance to powerful trading
                tools, to retirement resources is built around one thing, you. We know
                it's important to get professional guidance you can trust. That's why our
                experienced, licensed reps are available by phone, email, online, and in
                person for one-on-one support when you need it most. You can always count
                on us.
              </p>
            </div>
            <div>
              <img :src="transparent" class="" alt="" />
            </div>
          </div>
          <div class="f grid col-gap-10 grid-cols-2 mt-20">
            <div>
              <img :src="secured" class="" alt="" />
            </div>
            <div class="text-white">
              <p class="font-bold font-titilium text-2xl">
                SECURED
                <br />
                FUNDS
              </p>
              <p class="font-openSans text-sm">
                Your funds are kept in segregated 3rd party regulated financial
                institutions and we use advanced encryption tools to keep all of your
                transactions and personal data safe and secured. Also our flat-rate
                commission on all online equity trades gives you access to our
                award-winning investing and trading experience. Plus, we keep our pricing
                simple with no share limits or hidden fees, no trade requirements to
                access advanced features, and no deposit minimums. At No name 1 all
                transactions are simple and direct.
              </p>
            </div>
          </div>
          <div class="f grid col-gap-10 grid-cols-2 mt-20">
            <div class="text-white">
              <p class="font-bold font-titilium text-2xl">
                ALGO <br />
                TRADING
              </p>
              <p class="font-openSans text-sm">
                Algorithmic Trading is a program that offers everyone the opportunity to
                trade with better precision and high success rate than he/she would
                normally get. It makes use of a scenario-based approach and artificial
                intelligence so as to develop the best trading approach for the
                circumstances. Different variables such as price, quantity and time period
                are taken into serious consideration as well. The number of traders that
                use our Algorithmic trading keeps increasing by the day, as it makes the
                trading journey easy and well-profiting.
              </p>
            </div>
            <div>
              <img :src="algo" class="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- What we do Mobile -->
    <div class="block md:hidden mx-5">
      <div class="flex space-x-4 mt-10 ml-4 container mx-auto">
        <div>
          <p class="font-titilium font-bold">
            <span class="text-2xl md:text-3xl text-what">What </span
            ><span class="text-2xl md:text-3xl text-we">We </span
            ><span class="text-2xl md:text-3xl text-do">Do </span>
          </p>
        </div>
        <div class="mt-3">
          <hr
            class="bg-gradient-to-r from-purple-900 via-purple-900 to-blue-300 w-32 h-2 border border-none"
          />
        </div>
      </div>
      <div class="pt-2 container mx-auto ml-4">
        <div class="flex justify-center">
          <div>
            <p
              class="uppercase text-white font-titilium font-bold text-3xl sm:text-4xl md:text-6xl font-raleway leading-stight md:leading-none"
            >
              No Name 1
            </p>
            <p
              class="text-white uppercase font-titilium font-bold text-3xl sm:text-4xl md:text-6xl font-raleway leading-stight md:leading-none"
            >
              Trading
            </p>
          </div>
        </div>

        <div class="text-white font-openSans text-center mt-2 mx-10">
          <p>
            Your goals are unique, so your investment guidance should be too. This is why
            at No name 1 we take the time to listen and understand what matters most to
            you before helping you develop and manage your investment strategy.
          </p>
        </div>
      </div>
      <div class="block md:hidden mt-8">
        <div class="flex justify-center">
          <img :src="intumob" alt="" class="w w-full" />
        </div>

        <p
          class="text-3xl text-center uppercase font-titilium mx-10 mt-16 font-bold text-white"
        >
          A Trade Oriented Broker
        </p>
        <p class="mt-2 mx-2 text-center font-openSans font-light text-lg text-white">
          No Name 1 is a top online Forex broker with many years of experience in the
          market. No name 1 being a client-oriented company, places the needs of every one
          of our customers as its own priority. We are committed to providing all our
          investors a wide range of options when trading to help them become better at
          trading and also make profits.
        </p>
      </div>
      <div class="block md:hidden mt-8">
        <div class="flex justify-center">
          <img :src="tranmob" alt="" class="w w-full" />
        </div>

        <p
          class="text-3xl text-center uppercase font-titilium mx-10 mt-16 font-bold text-white"
        >
          TRANSPARENT AND TRUSTWORTHY
        </p>
        <p class="mt-2 mx-2 text-center font-openSans font-light text-lg text-white">
          For a few years now, No name 1 has been proud to help our clients pursue their
          financial goals while giving them more time to focus on what really matters in
          life. Everything we provide, from guidance to powerful trading tools, to
          retirement resources is built around one thing, you. We know it's important to
          get professional guidance you can trust. That's why our experienced, licensed
          reps are available by phone, email, online, and in person for one-on-one support
          when you need it most. You can always count on us.
        </p>
      </div>
      <div class="block md:hidden mt-8">
        <div class="flex justify-center">
          <img :src="stockMarket" alt="" class="w w-full" />
        </div>

        <p
          class="text-3xl text-center uppercase font-titilium mx-10 mt-16 font-bold text-white"
        >
          SECURED FUNDS
        </p>
        <p class="mt-2 mx-2 text-center font-openSans font-light text-lg text-white">
          Your funds are kept in segregated 3rd party regulated financial institutions and
          we use advanced encryption tools to keep all of your transactions and personal
          data safe and secured. Also our flat-rate commission on all online equity trades
          gives you access to our award-winning investing and trading experience. Plus, we
          keep our pricing simple with no share limits or hidden fees, no trade
          requirements to access advanced features, and no deposit minimums. At No name 1
          all transactions are simple and direct.
        </p>
      </div>
      <div class="block md:hidden mt-8">
        <div class="flex justify-center">
          <img :src="algomob" alt="" class="w w-full" />
        </div>

        <p
          class="text-3xl text-center uppercase font-titilium mx-10 mt-16 font-bold text-white"
        >
          ALGO TRADING
        </p>
        <p class="mt-2 mx-2 text-center font-openSans font-light text-lg text-white">
          Algorithmic Trading is a program that offers everyone the opportunity to trade
          with better precision and high success rate than he/she would normally get. It
          makes use of a scenario-based approach and artificial intelligence so as to
          develop the best trading approach for the circumstances. Different variables
          such as price, quantity and time period are taken into serious consideration as
          well. The number of traders that use our Algorithmic trading keeps increasing by
          the day, as it makes the trading journey easy and well-profiting.
        </p>
      </div>
    </div>
    <!-- Trade Now -->
    <div class="bg-rectangle hidden md:block h-32 w-full mt-20">
      <div class="container mx-auto relative">
        <div class="md:mx-48 flex justify-between">
          <div class="py-4">
            <p class="text-white font-titilium font-bold text-2xl">Trade Now</p>
            <p class="text-white font-openSans">
              Trade Shares, Indices, Forex,
              <br />
              Commodities and Cryptocurrencies with CFDs
            </p>
          </div>
          <div class="my-auto">
            <button class="btn-hero">Open Account</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Trade Now Mob -->
    <div class="bg-tradenowmob h-64 bg-cover w-full mt-20 block md:hidden">
      <div class="py-6">
        <div class="mx-10">
          <div class="mt-5 text-center">
            <p class="text-white font-titilium font-bold text-2xl">Trade Now</p>
            <p class="text-white font-openSans">
              Trade Shares, Indices, Forex, Commodities and Cryptocurrencies with CFDs
            </p>
          </div>
          <div class="mt-6 flex justify-center">
            <button class="btn-hero">Open Account</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Who We Are -->
    <div class="mt-20 container container mx-auto hidden md:block">
      <div class="mx-40">
        <div>
          <div class="flex space-x-2">
            <p class="font-titilium font-bold">
              <span class="text-3xl text-what">Who </span
              ><span class="text-3xl text-we">We </span
              ><span class="text-3xl text-do">Are </span>
            </p>
            <div class="mt-5">
              <hr
                class="bg-gradient-to-r from-purple-900 via-purple-900 to-blue-300 w-64 h-2 border border-none"
              />
            </div>
          </div>
          <p
            class="mt-10 text-white capitalize font-titilium font-bold text-3xl sm:text-4xl md:text-6xl font-raleway leading-stight md:leading-none w-1/2"
          >
            Trade Oriented <br />
            Broker
          </p>
          <div class="grid grid-cols-5 gap-0 mr-16">
            <div class="col-span-3">
              <p class="text-white font-openSans mt-4 text-base">
                No name 1 is a top online Forex broker with many years of experience in
                the market. No name 1 being a client-oriented company, places the needs of
                every one of our customers as its own priority. We are committed to
                providing all our investors a wide range of options when trading to help
                them become better at trading and also make profits. At No name 1 we
                ensure all our clients are up to date with the market trends and also
                provide them with latest trading technology and Forex tools by investing
                continuously in innovations. These instruments are updated on a regular
                basis thereby offering new platforms and services to answer the various
                questions and meet the need of every trader, in so doing; we are keeping
                our promise and commitment towards a fair and open trading.
                <br />
                <br />
                All our trusted clients have a 24/7 access to our various comprehensive
                educational materials. These materials help trader's understand and learn
                more about the various online operations, trading and the global market in
                general. We have a great customer support team which is always and readily
                available to assist with any issue you might encounter or challenge you
                might face in the course of trading. At No name 1 we place high importance
                and emphasis on customer satisfaction, and we are dedicated to being more
                than just an online broker to our clients. Make your trading experience
                worth it, choose a right broker, and choose No name 1!
              </p>
            </div>
            <div class="col-span-2">
              <img :src="trade" class="md:ml-20 md:mt-6 h-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Who We Are Mobile -->
    <div class="block md:hidden mx-5">
      <div class="flex space-x-4 mt-10 ml-4 container mx-auto">
        <div>
          <p class="font-titilium font-bold">
            <span class="text-2xl md:text-3xl text-what">Who </span
            ><span class="text-2xl md:text-3xl text-we">We </span
            ><span class="text-2xl md:text-3xl text-do">Are </span>
          </p>
        </div>
        <div class="mt-3">
          <hr
            class="bg-gradient-to-r from-purple-900 via-purple-900 to-blue-300 w-32 h-2 border border-none"
          />
        </div>
      </div>
      <div class="pt-2 container mx-auto ml-4">
        <p
          class="uppercase text-white font-titilium font-bold text-3xl sm:text-4xl md:text-6xl font-raleway leading-stight md:leading-none"
        >
          Trade Oriented
        </p>
        <p
          class="text-white uppercase font-titilium font-bold text-3xl sm:text-4xl md:text-6xl font-raleway leading-stight md:leading-none"
        >
          Broker
        </p>
      </div>
      <div class="flex justify-center mt-2">
        <img :src="tradeOriented" alt="" class="w w-full" />
      </div>
      <p class="mt-4 mx-2 text-center font-openSans font-light text-lg text-white">
        No name 1 is a top online Forex broker with many years of experience in the
        market. No name 1 being a client-oriented company, places the needs of every one
        of our customers as its own priority. We are committed to providing all our
        investors a wide range of options when trading to help them become better at
        trading and also make profits.
      </p>
      <p class="mt-4 mx-2 text-center font-openSans font-light text-lg text-white">
        At No name 1 we ensure all our clients are up to date with the market trends and
        also provide them with latest trading technology and Forex tools by investing
        continuously in innovations. These instruments are updated on a regular basis
        thereby offering new platforms and services to answer the various questions and
        meet the need of every trader, in so doing; we are keeping our promise and
        commitment towards a fair and open trading.
      </p>
      <p class="mt-4 mx-2 text-center font-openSans font-light text-lg text-white">
        All our trusted clients have a 24/7 access to our various comprehensive
        educational materials. These materials help trader's understand and learn more
        about the various online operations, trading and the global market in general. We
        have a great customer support team which is always and readily available to assist
        with any issue you might encounter or challenge you might face in the course of
        trading.
      </p>
      <p class="mt-4 mx-2 text-center font-openSans font-light text-lg text-white">
        At No name 1 we place high importance and emphasis on customer satisfaction, and
        we are dedicated to being more than just an online broker to our clients. Make
        your trading experience worth it, choose a right broker, and choose No name 1!
      </p>
    </div>
    <!-- Take On The Market 1 -->
    <div v-if="otherSection === 1" class="mt-20 hidden md:block">
      <div class="bg-takeMarket h-live bg-cover relative">
        <div class="container mx-auto">
          <div class="mx-48">
            <div class="w-full py-20">
              <p
                class="mt-10 text-white leading-normal capitalize font-titilium font-bold text-4xl"
              >
                TAKE ON THE MARKET WITH <br />
                OUR INNOVATIVE POWERFUL <br />
                PLATFORMS
              </p>
              <button class="btn-hero my-4">Trade Now</button>
              <p class="white-text font-openSans text-white">
                Trade Shares, Indices, Forex, Commodities <br />
                and Cryptocurrencies with CFDs
              </p>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 container pb-2">
          <div class="flex justify-center pl-32 space-x-2">
            <div @click="otherSection = 1" class="rounded-full h-4 w-4 bg-white"></div>
            <div @click="otherSection = 2" class="rounded-full h-4 w-4 bg-gray-600"></div>
            <div @click="otherSection = 3" class="rounded-full h-4 w-4 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Take On the Market 2 -->
    <div v-if="otherSection === 2" class="mt-20 hidden md:block">
      <div class="bg-callCenter h-live bg-cover relative">
        <div class="container mx-auto">
          <div class="mx-48">
            <div class="grid grid-cols-2 gap-4">
              <div></div>
              <div class="py-20 pl-10">
                <p
                  class="mt-10 text-white capitalize font-titilium font-bold text-4xl leading-relaxed"
                >
                  24 Hours by <br />
                  TEAM VIEWER <br />
                </p>
                <button class="btn-hero my-6">Click Here</button>
                <p class="text-white pl-2 font-openSans">For live assistance</p>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 container pb-2">
          <div class="flex justify-center pl-32 space-x-2">
            <div @click="otherSection = 1" class="rounded-full h-4 w-4 bg-gray-600"></div>
            <div @click="otherSection = 2" class="rounded-full h-4 w-4 bg-white"></div>
            <div @click="otherSection = 3" class="rounded-full h-4 w-4 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Take On the Market 3 -->
    <div v-if="otherSection === 3" class="mt-20 hidden md:block">
      <div class="bg-frameBackground h-live bg-cover relative">
        <div class="container mx-auto">
          <div class="mx-48">
            <div class="grid grid-cols-3 gap-40">
              <div class="my-20 col-span-1">
                <img :src="mobile" alt="" />
              </div>
              <div class="col-span-2 mt-32">
                <p
                  class="text-white text-right leading-normal capitalize font-titilium font-bold text-4xl align-bottom"
                >
                  THE FINANCIAL MARKET CAN BE <br />
                  VERY VOLATILE - CONTROL IT <br />
                  WITH OUR WEBTRADER
                </p>
                <div class="flex justify-end my-4">
                  <button class="btn-hero">Start Trade</button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 container pb-2">
          <div class="flex justify-center pl-32 space-x-2">
            <div @click="otherSection = 1" class="rounded-full h-4 w-4 bg-gray-600"></div>
            <div @click="otherSection = 2" class="rounded-full h-4 w-4 bg-gray-600"></div>
            <div @click="otherSection = 3" class="rounded-full h-4 w-4 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Take On the Mobile-->
    <div class="bg-takeMarketMob block md:hidden bg-cover h-live w-full mt-10">
      <p
        class="mx-4 pt-20 text-center uppercase text-white font-titilium font-bold text-2xl sm:text-4xl md:text-6xl font-raleway leading-stight md:leading-none"
      >
        TAKE ON THE MARKET WITH OUR INNOVATIVE POWERFUL PLATFORMS
      </p>
      <div class="flex justify-center my-4">
        <button class="btn-hero">Try it for Free</button>
      </div>
      <p class="white-text font-openSans text-white ml-12">
        Trade Shares, Indices, Forex, Commodities and Cryptocurrencies with CFDs
      </p>
    </div>
    <!-- Get Started With Us -->
    <div class="container mx-auto">
      <div class="mx-6 md:mx-48">
        <p
          class="mt-10 text-white capitalize font-titilium font-bold text-3xl md:text-4xl leading-stight md:leading-none"
        >
          Get Started With Us
        </p>
        <p
          class="mt-2 text-white capitalize font-titilium text-xl leading-stight md:leading-none"
        >
          Just follow these 4 steps
        </p>
        <div class="mt-4 mx-2 md:mx-0 md:grid md:grid-cols-7">
          <div>
            <p class="text-6xl font-titilium font-bold text-white">1</p>
            <p class="mt-4 font-titilium font-bold text-xl text-white uppercase">
              Register
            </p>
            <div class="mt-5">
              <hr
                class="bg-gradient-to-r from-purple-900 via-blue-700 to-green-900 w-32 h-2 border border-none"
              />
            </div>
            <p class="mt-4 font-titilium text-base text-white">
              Open your No name 1 Trading Account
            </p>
          </div>
          <div class="mx-auto my-auto mt-4 md:mt-32 hidden md:block">
            <img :src="right" alt="" />
          </div>
          <div class="md:hidden mt-4 md:my-0">
            <img :src="down" alt="" />
          </div>
          <div>
            <p class="text-6xl font-titilium font-bold text-white">2</p>
            <p class="mt-4 font-titilium font-bold text-xl text-white uppercase">
              Verify
            </p>
            <div class="mt-5">
              <hr
                class="bg-gradient-to-r from-purple-900 via-blue-700 to-green-900 w-32 h-2 border border-none"
              />
            </div>
            <p class="mt-4 font-titilium text-base text-white">
              Verify your documents with our Compliance
            </p>
          </div>
          <div class="mx-auto my-auto mt-4 md:mt-32 hidden md:block">
            <img :src="right" alt="" />
          </div>
          <div class="mt-4 md:mt-0 md:hidden">
            <img :src="down" alt="" />
          </div>
          <div>
            <p class="text-6xl font-titilium font-bold text-white">3</p>
            <p class="mt-4 font-titilium font-bold text-xl text-white uppercase">fund</p>
            <div class="mt-5">
              <hr
                class="bg-gradient-to-r from-purple-900 via-blue-700 to-green-900 w-32 h-2 border border-none"
              />
            </div>
            <p class="mt-4 font-titilium text-base text-white">
              Deposit funds into your No name 1 trading Account
            </p>
          </div>
          <div class="mx-auto my-auto mt-4 md:mt-32 hidden md:block">
            <img :src="right" alt="" />
          </div>
          <div class="mx-auto my-auto mt-4 md:hidden">
            <img :src="down" alt="" />
          </div>
          <div>
            <p class="text-6xl font-titilium font-bold text-white">4</p>
            <p class="mt-4 font-titilium font-bold text-xl text-white uppercase">trade</p>
            <div class="mt-5">
              <hr
                class="bg-gradient-to-r from-purple-900 via-blue-700 to-green-900 w-32 h-2 border border-none"
              />
            </div>
            <p class="mt-4 font-titilium text-base text-white">
              Start trading Forex, Indices, Stocks and Commodities
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="mt-10">
      <Footer />
    </div>
  </div>
</template>

<script>
import intumob from "@/assets/images/intumob.png";
import mobile from "@/assets/images/mobile.png";
import right from "@/assets/images/Vector.svg";
import intuitive from "@/assets/images/intuitive.png";
import transparent from "@/assets/images/transparent.png";
import tranmob from "@/assets/images/tranmob.png";
import stockMarket from "@/assets/images/stockMarket.png";
import secured from "@/assets/images/secured.png";
import algo from "@/assets/images/algo.png";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import trade from "@/assets/images/trade.png";
import algomob from "@/assets/images/algomob.png";
import down from "@/assets/images/VectorMobile.svg";
import tradeOriented from "@/assets/images/tradeOrientedBroker.png";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      hero: true,
      otherSection: 1,
      down,
      mobile,
      intumob,
      tranmob,
      stockMarket,
      intuitive,
      transparent,
      secured,
      algo,
      trade,
      right,
      algomob,
      tradeOriented,
    };
  },
};
</script>

<style>
.btn-hero {
  @apply uppercase bg-opacity-25 bg-gradient-to-r from-purple-900 via-purple-900 to-green-900 text-white font-titilium font-bold  py-2 rounded-md px-10 border border-gray-500 shadow-blue;
}
</style>
