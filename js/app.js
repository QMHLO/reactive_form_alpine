document.addEventListener("alpine:init", app);

function app() {
  Alpine.data("step1", () => ({
    savings: {
      digit: "",

      decrease() {
        this.savings.digit > 0 ? (this.savings.digit = Number(this.savings.digit) - 1) : undefined;
      },

      increase() {
        this.savings.digit = Number(this.savings.digit) + 1;
      },
    },
    realEstate: {
      digit: "",

      decrease() {
        this.realEstate.digit > 0 ? (this.realEstate.digit = Number(this.realEstate.digit) - 1) : undefined;
      },

      increase() {
        this.realEstate.digit = Number(this.realEstate.digit) + 1;
      },
    },
    securities: {
      digit: "",

      decrease() {
        this.securities.digit > 0 ? (this.securities.digit = Number(this.securities.digit) - 1) : undefined;
      },

      increase() {
        this.securities.digit = Number(this.securities.digit) + 1;
      },
    },
    others: {
      digit: "",

      decrease() {
        this.others.digit > 0 ? (this.others.digit = Number(this.others.digit) - 1) : undefined;
      },

      increase() {
        this.others.digit = Number(this.others.digit) + 1;
      },
    },
    debts: {
      digit: "",

      decrease() {
        this.debts.digit > 0 ? (this.debts.digit = Number(this.debts.digit) - 1) : undefined;
      },

      increase() {
        this.debts.digit = Number(this.debts.digit) + 1;
      },
    },
    total() {
      const total =
        Number(this.savings.digit) + Number(this.realEstate.digit) + Number(this.securities.digit) + Number(this.others.digit) - Number(this.debts.digit);
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
