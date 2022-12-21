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
        console.log(this);
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

  step_2();
}
