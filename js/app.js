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
      const total =
        Number(this.savings.digit) + Number(this.realEstate.digit) + Number(this.securities.digit) + Number(this.others.digit) - Number(this.debts.digit);
      isan_sogaku = total * 10000;
      let heritage_interval = total;
      modifyHeritage(heritage_interval);
      return total;
    },
  }));
  Alpine.data("step2", () => ({
    spouse: false, // boolean
    relative: "", // ["child", "siblings", "parents", "no_relative"]
    inherit_rate: 0,
    heirs_count: null,

    logger() {
      console.log(this.spouse, this.inherit_rate, this.heirs_count, this.relative);
    },

    have_spouse_handler() {
      this.spouse = true;
      if (this.relative === "no_relative") {
        this.heirs_count = 1;
        this.inherit_rate = 100;
        haiwari = 100;
      }
      haigusya = 2;
      sozokunin = Number(this.heirs_count);
      changeHeirs();
    },

    no_relative_handler() {
      this.relative = "no_relative";
      if (!this.spouse) {
        this.heirs_count = 0;
      } else {
        this.heirs_count = 1;
        this.inherit_rate = 100;
        haiwari = 100;
      }
      zokugara = 0;
      sozokunin = Number(this.heirs_count);
      changeHeirs();
    },
  }));
  Alpine.data("step3", () => ({
    lands: {
      digit: "",

      decrease() {
        if (this.lands.digit > 0) {
          this.lands.digit = Number(this.lands.digit) - 1;
          lands_value = land_factor(Number(this.lands.digit));
        }
      },

      increase() {
        this.lands.digit = Number(this.lands.digit) + 1;
        lands_value = land_factor(Number(this.lands.digit));
      },
    },
    unlistedshares: {
      digit: "",

      decrease() {
        if (this.unlistedshares.digit > 0) {
          this.unlistedshares.digit = Number(this.unlistedshares.digit) - 1;
          stock_value = Number(this.unlistedshares.digit) * 15;
        }
      },

      increase() {
        this.unlistedshares.digit = Number(this.unlistedshares.digit) + 1;
        stock_value = Number(this.unlistedshares.digit) * 15;
      },
    },
  }));
}

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("mousewheel", function (event) {
    this.blur();
  });
});
