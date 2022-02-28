<template>
  <div>
    <navbar class="pt-4" />
    <div class="container mx-auto">
      <div class="mx-10 sm:mx-20 md:mx-48">
        <div class="flex justify-center text-center mt-4">
          <div>
            <p
              class="text-white text-3xl sm:text-4xl md:text-5xl font-titilium font-bold leading-0 uppercase"
            >
              Trading
            </p>
            <p
              class="text-white text-3xl sm:text-4xl md:text-5xl font-titilium font-bold leading-0 uppercase -mt-5"
            >
              Accounts
            </p>
          </div>
        </div>
        <div class="flex justify-center mt-2">
          <p class="text-white text-center text-lg font-titilium leading-0">
            Our accounts provide benefits of Forex market to private and corporate
            clients, using one of the most advanced trading platforms available.
          </p>
        </div>
      </div>

      <div class="mx-5 sm:mx-10 md:mx-16 mt-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Mini -->
          <div class="border-4 border-white b h-auto w-auto rounded-md relative">
            <div class="w-full h-20 bg-purple-900 flex justify-center pt-6">
              <p class="text-white text-3xl font-openSans uppercase">Mini</p>
            </div>
            <div>
              <div class="mx-6 flex justify-between my-4">
                <div>
                  <p class="text-white font-bold font-titilium text-lg">
                    Basic Training <br />
                    For Beginners
                  </p>
                </div>
                <div>
                  <p class="text-white font-bold font-titilium text-2xl">$500</p>
                </div>
              </div>
            </div>

            <hr class="h-1 bg-purple-900 border-none w-full mt-4 md:mt-0" />
            <div class="mt-10">
              <div class="flex mx-2 md:mx-10 my-2">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">Online Chat Support</p>
              </div>
              <div class="flex mx-2 md:mx-10 my-2">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Platforms: MT4﹠Mobile
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Instruments: Forex, CFDs﹠ Commodities
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-2">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">Free E-book</p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Individual Competitive Spreads﹠ Commissions
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Access to Breaking News﹠ Market Research
                </p>
              </div>
            </div>
            <div
              class="mt-20 my-4 absolute hidden md:block bottom-0 transform translate-x-16"
            >
              <div class="">
                <button class="btn-hero">Open Account</button>
              </div>
            </div>
            <div class="my-4">
              <div class="flex md:hidden justify-center">
                <button class="btn-hero">Open Account</button>
              </div>
            </div>
          </div>
          <!-- Classic -->
          <div class="border-4 border-white h-auto w-auto rounded-md relative">
            <div class="w-full h-20 bg-blue-500 flex justify-center pt-6">
              <p class="text-white text-3xl font-openSans uppercase">Classic</p>
            </div>
            <div>
              <div class="mx-6 flex justify-between my-4">
                <div>
                  <p class="text-white font-bold font-titilium text-lg">
                    For Skilled <br />
                    Investors
                  </p>
                </div>
                <div>
                  <p class="text-white font-bold font-titilium text-2xl">$5000</p>
                </div>
              </div>
            </div>

            <hr class="h-1 bg-blue-500 border-none w-full mt-4 md:mt-0" />
            <div class="mt-10">
              <div class="flex mx-2 md:mx-10 my-2">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">Online Chat Support</p>
              </div>
              <div class="flex mx-2 md:mx-10 my-2">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Platforms: MT4﹠Mobile
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Instruments: Forex, CFDs﹠ Commodities
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-2">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">Free E-book</p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Individual Competitive Spreads﹠ Commissions
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Access to Breaking News﹠ Market Research
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">Online Phone Support</p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Real-Time Trading Signals
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Trading Education Program
                </p>
              </div>
            </div>
            <div
              class="mt-20 my-4 absolute hidden md:block bottom-0 transform translate-x-16"
            >
              <div class="w-full">
                <div class="flex justify-center">
                  <button class="btn-hero">Open Account</button>
                </div>
              </div>
            </div>
            <div class="my-4">
              <div class="flex md:hidden justify-center">
                <button class="btn-hero">Open Account</button>
              </div>
            </div>
          </div>
          <!-- Premium -->
          <div class="border-4 border-white b h-auto w-auto rounded-md">
            <div class="w-full h-20 bg-green-900 flex justify-center pt-6">
              <p class="text-white text-3xl font-openSans uppercase">premium</p>
            </div>
            <div>
              <div class="mx-6 flex justify-between my-4">
                <div>
                  <p
                    class="hidden md:block text-white font-bold font-titilium text-base md:text-lg"
                  >
                    Advanced Trading For <br />
                    Experienced Investors
                  </p>
                  <p
                    class="block md:hidden text-white font-bold font-titilium text-base md:text-lg"
                  >
                    Advanced Trading <br />
                    For Experienced <br />
                    Investors
                  </p>
                </div>
                <div>
                  <p class="text-white font-bold font-titilium text-xl md:text-2xl">
                    $50 000
                  </p>
                </div>
              </div>
            </div>

            <hr class="h-1 bg-green-900 border-none w-full mt-4 md:mt-0" />
            <div class="mt-10">
              <div class="flex mx-2 md:mx-10 my-2">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">Online Chat Support</p>
              </div>
              <div class="flex mx-2 md:mx-10 my-2">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Platforms: MT4﹠Mobile
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Instruments: Forex, CFDs﹠ Commodities
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-2">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">Free E-book</p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Individual Competitive Spreads﹠ Commissions
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Access to Breaking News﹠ Market Research
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">Online Phone Support</p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Real-Time Trading Signals
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Trading Education Program
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">
                  Account Executive Team
                </p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">Available 24/7</p>
              </div>
              <div class="flex mx-2 md:mx-10 my-3">
                <img :src="tick" alt="" />
                <p class="ml-4 text-white font-openSans text-lg">Trade Mentor</p>
              </div>
            </div>
            <div class="mt-20 my-4 hidden md:block">
              <div class="flex justify-center">
                <button class="btn-hero">Open Account</button>
              </div>
            </div>
            <div class="my-4">
              <div class="flex md:hidden justify-center">
                <button class="btn-hero">Open Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-steps h-full md:h-footer bg-cover mt-10">
      <div class="container mx-auto">
        <div class="mx-5 md:mx-48 pt-10">
          <p
            class="text-white text-center text-xl md:text-3xl font-bold font-titilium leading-0"
          >
            Steps for opening a No Name 1 Trading Account
          </p>
        </div>
        <div class="mx-5 md:mx-16 md:grid grid-cols-3 gap-10 mt-12 pb-10">
          <div>
            <div class="flex">
              <img :src="one" alt="" />
              <p class="mt-4 ml-2 font-titilium font-bold text-xl text-white uppercase">
                Pick the account types depending on your objectives and needs
              </p>
            </div>

            <div class="mt-5">
              <hr
                class="bg-gradient-to-r from-purple-900 via-blue-700 to-green-900 w-56 md:w-64 h-2 border border-none"
              />
            </div>
            <p class="mt-4 font-titilium text-base text-white">
              Three available account types are supplemented with lots of additional
              features that bring some extra pluses to the investor. You can easily sign
              up for any of them. And keep the notice that you can change the account type
              after putting money on your acc.
            </p>
          </div>
          <div class="mt-4">
            <div class="flex">
              <img :src="two" alt="" />
              <p class="mt-4 ml-2 font-titilium font-bold text-xl text-white uppercase">
                Fill out the demanded information and confirm your identity
              </p>
            </div>

            <div class="mt-5">
              <hr
                class="bg-gradient-to-r from-purple-900 via-blue-700 to-green-900 w-56 md:w-64 h-2 border border-none"
              />
            </div>
            <p class="mt-4 font-titilium text-base text-white">
              You just need to complete information profile with your personal data and to
              provide some identity papers.
            </p>
          </div>
          <div class="mt-4">
            <div class="flex">
              <img :src="three" alt="" />
              <p class="mt-4 ml-2 font-titilium font-bold text-xl text-white uppercase">
                Depositing money into your account
              </p>
            </div>

            <div class="mt-5">
              <hr
                class="mt-12 bg-gradient-to-r from-purple-900 via-blue-700 to-green-900 w-56 md:w-64 h-2 border border-none"
              />
            </div>
            <p class="mt-4 font-titilium text-base text-white">
              Once we approve and authorize your application, you will be able to make
              your payments and withdrawals swiftly.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center text-center mt-10 md:mt-10" id="segregated">
      <div>
        <p
          class="text-white text-3xl sm:text-4xl md:text-5xl font-titilium font-bold leading-0 uppercase"
        >
          Segregated
        </p>
        <p
          class="text-white text-3xl sm:text-4xl md:text-5xl font-titilium font-bold uppercase md:-mt-5 -mt-3"
        >
          ACCOUNTS
        </p>
      </div>
    </div>
    <div class="flex justify-center mt-2 container mx-auto">
      <div class="mx-10 md:mx-32">
        <p class="text-white text-center text-lg font-titilium leading-0 md:mx-48">
          The unique No name 1 Account allows our clients to conduct trades perfectly
          protects them out of slow transaction times or information and payments errors.
        </p>
      </div>
    </div>
    <div class="container mx-auto mt-6">
      <div class="md:grid grid-cols-2 mx-5 md:mx-16 gap-40">
        <div class="flex justify-center mb-4 md:hidden">
          <img :src="correctmob" alt="" />
        </div>
        <div class="text-white">
          <p class="font-titilium text-xl font-bold">Advantages:</p>
          <p class="font-titilium text-lg">
            There are few more additional benefits that are shaped exactly to satisfy our
            client’s needs. You can be sure in:
          </p>
          <div class="font-titilium text-lg ml-4 md:ml-10 my-4">
            <div class="flex">
              <img :src="bulletin" alt="" />
              <p class="ml-2">100% client orientated experience</p>
            </div>
            <div class="flex">
              <img :src="bulletin" class="mb-6" alt="" />
              <p class="ml-2">
                24/5 client support and help in dealing with the most common issues
              </p>
            </div>
            <div class="flex">
              <img :src="bulletin" alt="" />
              <p class="ml-2">Effective use of your capital</p>
            </div>
            <div class="flex">
              <img :src="bulletin" alt="" />
              <p class="ml-2">128 bit SSL Security</p>
            </div>
            <div class="flex">
              <img :src="bulletin" class="mb-6" alt="" />
              <p class="ml-2">
                Protocols Convenient and client-friendly management of your funds
              </p>
            </div>
          </div>
          <p class="font-titilium text-xl font-bold">
            When will a Senior Broker be assigned to me?
          </p>
          <p class="font-titilium text-lg">
            Your Personal Senior Broker will be assigned to you upon activating and
            funding your account.
          </p>
        </div>
        <div>
          <img :src="correct" class="hidden md:block" alt="" />
        </div>
      </div>
    </div>
    <div class="bg-accountFunding md:h-account bg-cover w-full mt-10" id="funding">
      <div class="container mx-auto py-4">
        <div class="flex justify-center text-center pt-10">
          <div>
            <p
              class="text-white text-3xl sm:text-4xl md:text-5xl font-titilium font-bold leading-0 uppercase"
            >
              Account
            </p>
            <p
              class="text-white text-3xl sm:text-4xl md:text-5xl font-titilium font-bold uppercase md:-mt-5 -mt-3"
            >
              Funding
            </p>
          </div>
        </div>
        <div class="flex justify-center mt-2 container mx-auto">
          <div class="mx-10 md:mx-64">
            <p class="text-white text-center text-lg font-titilium leading-0 md:mx-48">
              There are 3 different ways to fund your No name 1
            </p>
          </div>
        </div>
        <div class="md:grid grid-cols-3 gap-24 mx-5 md:mx-16 mt-10">
          <div class="text-white">
            <div class="flex justify-center">
              <img :src="credit" class="md:w-20 w-16 h-16 md:h-16" alt="" />
            </div>
            <div class="mt-6 text-center">
              <p class="font-titilium text-2xl font-bold">Credit Card/Debit Card</p>
              <p class="font-openSans mt-2 text-base">
                The best way to fund your account is with a credit or debit card. The
                transfer is immediate and secure.
              </p>
              <p class="font-openSans mt-4 text-base">
                Minimum transaction amount $250 with a maximum amount $500. Please not
                your card should be enabled for international transactions.
              </p>
            </div>
          </div>
          <div class="text-white mt-10 md:mt-0">
            <div class="flex justify-center">
              <img :src="bank" class="w-24 h-16 md:h-16" alt="" />
            </div>
            <div class="mt-6 text-center">
              <p class="font-titilium text-2xl font-bold">Bank Draft</p>
              <p class="font-openSans mt-2 text-base">
                You can utilize your banks services and transfer funds using a bank draft.
                Please note that in some cases it might take up to 5 days for your funds
                to clear.
              </p>
            </div>
          </div>
          <div class="text-white mt-10 md:mt-0">
            <div class="flex justify-center">
              <img :src="wire" class="w-20 h-16 md:h-16" alt="" />
            </div>
            <div class="mt-6 text-center">
              <p class="font-titilium text-2xl font-bold">Credit Card/Debit Card</p>
              <p class="font-openSans mt-2 text-base">
                Please use the details provided by your Senior Broker. The minimum amount
                is $10.000 for bank wires. If you have online banking you can input the
                details provided online, or visit your bank and fill in the wire transfer
                form. Please remember to provide your Senior Broker the remittance slip.
              </p>
              <p class="font-openSans mt-4 text-base">
                Depending on your bank your funds might take up to 5 days to clear. As
                soon as the funds are in your trading account you will receive an email
                notification.
              </p>
            </div>
          </div>
        </div>
        <div class="mx-5 md:mx-16 mt-10 md:mt-4">
          <div class="md:grid grid-cols-3">
            <div class="col-span-2">
              <p class="mt-4 font-titilium font-bold text-xl text-white uppercase">
                Withdrawing Funds
              </p>
              <hr
                class="bg-gradient-to-r from-purple-900 via-blue-700 to-green-900 w-56 md:w-64 h-2 border border-none"
              />
              <div class="mt-6 text-white font-openSans text-base">
                <p>In order to submit a withdrawal request you need to:</p>
                <p class="mt-4">
                  Log in to your account in your client area and submit a withdrawal
                  request.
                </p>
                <p class="mt-4">
                  Your request will be addressed and processed promptly. Usually, provided
                  the account is verified the request is process within the next 2
                  business days. Depending on your bank, your funds might take longer to
                  appear in your bank account.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-5 md:mx-16 mt-10 md:mt-4">
          <div class="md:grid grid-cols-3">
            <div class="col-span-2">
              <p class="mt-4 font-titilium font-bold text-xl text-white uppercase">
                Things you should take into account:
              </p>
              <hr
                class="bg-gradient-to-r from-purple-900 via-blue-700 to-green-900 w-56 md:w-64 h-2 border border-none"
              />
              <div class="mt-6 text-white font-openSans text-base">
                <p>
                  The initial amount invested will be returned through the same method
                  deposited. If the requested amount exceeds the initial invested amount,
                  you need to provide us with the bank account details of an account under
                  your name, in order to receive the excess amount.
                </p>
                <p class="mt-4">
                  For further inquiries regarding funding please contact us on support@no
                  name 1.com or through our live chat.
                </p>
                <p class="mt-4">
                  In case you would like to ask anything related to putting money on the
                  Live Account, feel free to get in touch with a No name 1 employee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-10">
      <div class="mx-5 md:mx-16 md:grid grid-cols-4 gap-10 text-white" id="faq">
        <div class="col-span-1">
          <p class="font-titilium text-6xl font-bold leading-none">Account FAQs</p>
          <p class="mt-4">
            Everything you need to know about our services.Can’t find what you’re looking
            for? Please Contact Us
          </p>
        </div>
        <div class="col-span-3 mt-6">
          <div class="my-4">
            <div class="flex justify-between space-x-10">
              <p class="font-titilium font-bold text-lg">
                How to open a No name 1 trade account trade account?
              </p>
              <div class="h-10 w-10 md:h-6 md:w-6">
                <svg
                  v-if="q1 === false"
                  @click="q1 = true"
                  class="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="q1 === true"
                  @click="q1 = false"
                  class="cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div v-if="q1 === true" class="mt-2 mx-4 md:mx-10">
              <p>
                It is easy and secure to open a No name 1 account. Initially, you can
                choose to trade on a free demo account. However, if you're ready to trade,
                you can start trading on your Live Account. Based on how you would like to
                fund your account, there are three types of accounts available; once you
                begin trading there is always the option to upgrade from one account type
                to another.
                <br />
                <br />
                You will need to fill out a short registration form for any Live Account
                that you want to open. Legal documentation is required by regulation in
                order to provide proof of your identity. As soon as your identity has been
                confirmed, all you need to do is download the platform you want to trade
                on, make a deposit to fund your account, and then you're ready to start
                trading.
              </p>
            </div>
          </div>
          <!-- Question 2 -->
          <div class="my-4">
            <div class="flex justify-between space-x-10">
              <p class="font-titilium font-bold text-lg">
                Which types of accounts are available?
              </p>
              <div class="h-8 w-8 md:h-6 md:w-6">
                <svg
                  v-if="q2 === false"
                  @click="q2 = true"
                  class="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="q2 === true"
                  @click="q2 = false"
                  class="cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div v-if="q2 === true" class="mt-2 mx-4 md:mx-10">
              <p class="mb-4">Three kinds of accounts are offered by No Name 1:</p>
              <p>Mini Account - minimum deposit at $500 USD.</p>
              <p>Classic Account - minimum deposit at $5000 USD.</p>
              <p>Premium Account - minimum deposit at $20000 USD.</p>
            </div>
          </div>
          <!-- Question 3 -->
          <div class="my-4">
            <div class="flex justify-between space-x-10">
              <p class="font-titilium font-bold text-lg">
                Which platform should you use?
              </p>
              <div class="h-6 w-6 md:h-6 md:w-6">
                <svg
                  v-if="q3 === false"
                  @click="q3 = true"
                  class="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="q3 === true"
                  @click="q3 = false"
                  class="cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div v-if="q3 === true" class="mt-2 mx-4 md:mx-10">
              <p>
                There are a variety of different platforms available from No name 1 to
                meet the requirements of different traders with different circumstances.
              </p>
              <div class="mx-4">
                <ul>
                  <li>
                    <p class="mb-4">
                      No name 1 MetaTrader 4 - Download this popular, world-renowned Forex
                      desktop platform if you predominately trade in foreign currencies.
                      It is both user-friendly and state-of-the-art.
                    </p>
                    <p>
                      No name 1 Mobile - this solution provides apps for Android, tablets,
                      and iPhone, enabling traders to trade from anywhere in the world,
                      from a variety of devices.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- QUESTION 4 -->
          <div class="my-4">
            <div class="flex justify-between space-x-10">
              <p class="font-titilium font-bold text-lg">
                What type of information do you need to give in order to trade?
              </p>
              <div class="h-6 w-6 md:h-6 md:w-6">
                <svg
                  v-if="q4 === false"
                  @click="q4 = true"
                  class="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="q4 === true"
                  @click="q4 = false"
                  class="cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div v-if="q4 === true" class="mt-2 mx-4 md:mx-10">
              <p class="mb-4">
                You are requested to give the following information for proof of identity
                upon registration:
              </p>
              <p class="mx-2 md:mx-4">
                Proof of ID. A copy of your Passport, National ID or Driver’s License
                <br />
                A copy of a utility bill or bank statement, not older than 3 months
              </p>
              <p class="mt-4">
                You will need to clearly indicate the beneficiary name on the No name 1-
                Client Agreement. It is important that the account beneficiary name
                corresponds to the name on the client agreement form, and also the
                documents for proof of identity. In addition, if you wish to withdraw
                funds, it must be to the same beneficiary.
              </p>
            </div>
          </div>
          <!-- QUESTION 5 -->
          <div class="my-4">
            <div class="flex justify-between space-x-10">
              <p class="font-titilium font-bold text-lg">How do you manage your risk?</p>
              <div class="h-10 w-10 md:h-6 md:w-6">
                <svg
                  v-if="q5 === false"
                  @click="q5 = true"
                  class="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="q5 === true"
                  @click="q5 = false"
                  class="cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div v-if="q5 === true" class="mt-2 mx-4 md:mx-10">
              <p>
                The stop-loss order and the limit order are the most common risk
                management tools in Forex trading. A limit order sets a restriction on the
                minimum price to be received or the maximum price to be paid.
              </p>
              <p class="mt-4">
                An automatic liquidation at a predetermined price for a particular
                position is called a stop loss. This is used to limit potential losses if
                the market moves against an investor’s position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="mt-10" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import tick from "@/assets/images/tick.svg";
import correct from "@/assets/images/correct.png";
import correctmob from "@/assets/images/correctmob.png";
import one from "@/assets/images/1.svg";
import two from "@/assets/images/2.svg";
import three from "@/assets/images/3.svg";
import wire from "@/assets/images/wire.svg";
import bank from "@/assets/images/bank.svg";
import credit from "@/assets/images/credit.svg";
import bulletin from "@/assets/images/bulletin.svg";
export default {
  components: { Navbar, Footer },
  data() {
    return {
      bulletin,
      tick,
      one,
      two,
      three,
      correct,
      correctmob,
      wire,
      bank,
      credit,
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    };
  },
  created() {
    console.log(this.$route.path);
  },
};
</script>

<style>
.btn-hero {
  @apply uppercase bg-opacity-25 bg-gradient-to-r from-purple-900 via-purple-900 to-green-900 text-white font-titilium font-bold  py-2 rounded-md px-10 border border-gray-500 shadow-blue;
}
</style>
