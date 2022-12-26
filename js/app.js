document.addEventListener("alpine:init", app);

const inc = (num, base) => (Math.floor(num / base) + 1) * base;
const dec = (num, base) => (Math.ceil(num / base) - 1) * base;
const normalize = (operation) => (base) => (num) => operation(num, base);

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
      isan_sogaku = total * 10000;
      heritage_interval = isan_sogaku;
      modifyHeritage();
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
    this.blur();
  });
});
