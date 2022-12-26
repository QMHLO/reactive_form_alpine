document.addEventListener("alpine:init", app);

const inc = (num, base) => Math.floor(num / base) + 1;
const dec = (num, base) => Math.ceil(num / base) - 1;
const double = (num, base) => Math.ceil(num / base) * 2;

const normalize = (operation) => (base) => (num) => operation(num, base) * base;

const inc_100 = normalize(inc)(100);
const dec_100 = normalize(dec)(100);

function app() {
  Alpine.data("step1", () => ({
    savings: {
      digit: "",

      decrease() {
        const current = Number(this.savings.digit);
        this.savings.digit > 0 ? (this.savings.digit = dec_100(current)) : undefined;
      },

      increase() {
        const current = Number(this.savings.digit);
        this.savings.digit = inc_100(current);
      },
    },
    realEstate: {
      digit: "",

      decrease() {
        const current = Number(this.realEstate.digit);
        this.realEstate.digit > 0 ? (this.realEstate.digit = dec_100(current)) : undefined;
      },

      increase() {
        const current = Number(this.realEstate.digit);
        this.realEstate.digit = inc_100(current);
      },
    },
    securities: {
      digit: "",

      decrease() {
        const current = Number(this.securities.digit);
        this.securities.digit > 0 ? (this.securities.digit = dec_100(current)) : undefined;
      },

      increase() {
        const current = Number(this.securities.digit);
        this.securities.digit = inc_100(current);
      },
    },
    others: {
      digit: "",

      decrease() {
        const current = Number(this.others.digit);
        this.others.digit > 0 ? (this.others.digit = dec_100(current)) : undefined;
      },

      increase() {
        const current = Number(this.others.digit);
        this.others.digit = inc_100(current);
      },
    },
    debts: {
      digit: "",

      decrease() {
        const current = Number(this.debts.digit);
        this.debts.digit > 0 ? (this.debts.digit = dec_100(current)) : undefined;
      },

      increase() {
        const current = Number(this.debts.digit);
        this.debts.digit = inc_100(current);
      },
    },
    total() {
      const total = Number(this.savings.digit) + Number(this.realEstate.digit) + Number(this.securities.digit) + Number(this.others.digit) - Number(this.debts.digit);
      // console.log(total);
      return total;
    },
    reset() {
      this.savings.digit = 0;
      this.realEstate.digit = 0;
      this.securities.digit = 0;
      this.others.digit = 0;
      this.debts.digit = 0;
    },
  }));
  Alpine.data("step2", () => ({
    spouse: false, // boolean
    relative: "", // ["child", "siblings", "parents", "no_relative"]
    inherit_rate: 0,
    heirs_count: null,
  }));
  Alpine.data("step3", () => ({
    lands: {
      digit: "",

      decrease() {
        this.lands.digit > 0 ? (this.lands.digit = Number(this.lands.digit) - 1) : undefined;
      },

      increase() {
        this.lands.digit = Number(this.lands.digit) + 1;
      },
    },
    unlistedshares: {
      digit: "",

      decrease() {
        this.unlistedshares.digit > 0 ? (this.unlistedshares.digit = Number(this.unlistedshares.digit) - 1) : undefined;
      },

      increase() {
        this.unlistedshares.digit = Number(this.unlistedshares.digit) + 1;
      },
    },
  }));
}

const showResult = document.getElementById("show_result");
const answerBlock = document.querySelector(".answer_block");
showResult.addEventListener("click", () => {
  answerBlock.style.display = "block";
});

const inputs = document.querySelectorAll(".calculate_inner_block .form_wrapper .input_gp.w160 input");
inputs.forEach((input) => {
  input.addEventListener("mousewheel", function (event) {
    console.log("mousewheel activated");
    this.blur();
  });
});

function calc(total) {
  console.log("This is inner value for function", total);
}

//Check Heritage Value
let heritage = 50000;

let one_min = -99999;
let one_max = 4999;
let two_min = 5000;
let two_max = 5999;
let three_min = 6000;
let three_max = 6999;
let four_min = 7000;
let four_max = 7999;
let five_min = 8000;
let five_max = 9999;
let six_min = 10000;
let six_max = 14999;
let seven_min = 15000;
let seven_max = 19999;
let eight_min = 20000;
let eight_max = 24999;
let nine_min = 25000;
let nine_max = 29999;
let ten_min = 30000;
let ten_max = 39999;
let eleven_min = 40000;
let eleven_max = 49999;
let twelve_min = 50000;

if (heritage >= one_min && heritage <= one_max) {
  heritage = 25;
  console.log(heritage);
} else if (heritage >= two_min && heritage <= two_max) {
  heritage = 35;
  console.log(heritage);
} else if (heritage >= three_min && heritage <= three_max) {
  heritage = 40;
  console.log(heritage);
} else if (heritage >= four_min && heritage <= four_max) {
  heritage = 45;
  console.log(heritage);
} else if (heritage >= five_min && heritage <= five_max) {
  heritage = 50;
  console.log(heritage);
} else if (heritage >= six_min && heritage <= six_max) {
  heritage = 65;
  console.log(heritage);
} else if (heritage >= seven_min && heritage <= seven_max) {
  heritage = 80;
  console.log(heritage);
} else if (heritage >= eight_min && heritage <= eight_max) {
  heritage = 100;
  console.log(heritage);
} else if (heritage >= nine_min && heritage <= nine_max) {
  heritage = 120;
  console.log(heritage);
} else if (heritage >= ten_min && heritage <= ten_max) {
  heritage = 150;
  console.log(heritage);
} else if (heritage >= eleven_min && heritage <= eleven_max) {
  heritage = 180;
  console.log(heritage);
} else if (heritage >= twelve_min) {
  heritage = null;
  console.log(heritage);
}
