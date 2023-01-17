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

    step1_logger() {
      console.log(this.savings.digit, this.realEstate.digit, this.securities.digit, this.others.digit, this.debts.digit);
    },
  }));
  Alpine.data("step2", () => ({
    spouse: null, // boolean
    relative: "", // ["child", "siblings", "parents", "no_relative"]
    inherit_rate: 0,
    heirs_count: null,

    logger() {
      console.log("spouse:", this.spouse, "inherit rate:", this.inherit_rate, "heirt count:", this.heirs_count, "relative:", this.relative);
    },

    have_spouse_handler() {
      this.spouse = true;
      if (this.relative === "" || this.relative === "no_relative") {
        this.heirs_count = 1;
        this.inherit_rate = 100;
        haiwari = 100;
      } else if (this.heirs_count < 2) {
        this.heirs_count = 2;
      }
      haigusya = 2;
      sozokunin = Number(this.heirs_count);
      changeHeirs();
    },

    not_have_spouse_handler() {
      this.spouse = false;
      this.inherit_rate = 0;
      if (this.relative === "no_relative") {
        this.heirs_count = 0;
      }
      haigusya = 1;
      sozokunin = Number(this.heirs_count);
      changeHeirs();
    },

    child_handler() {
      this.relative = "child";
      zokugara = 1;
      if (this.spouse && this.heirs_count < 2) {
        this.heirs_count = 2;
      } else if (!this.spouse && !this.heirs_count) {
        this.heirs_count = 1;
      }
      sozokunin = Number(this.heirs_count);
      changeHeirs();
    },

    siblings_handler() {
      this.relative = "siblings";
      zokugara = 3;
      if (this.spouse && this.heirs_count < 2) {
        this.heirs_count = 2;
      } else if (!this.spouse && !this.heirs_count) {
        this.heirs_count = 1;
      }
      sozokunin = Number(this.heirs_count);
      changeHeirs();
    },

    parents_handler() {
      this.relative = "parents";
      zokugara = 2;
      if (this.spouse && this.heirs_count < 2) {
        this.heirs_count = 2;
      } else if (!this.spouse && !this.heirs_count) {
        this.heirs_count = 1;
      }
      sozokunin = Number(this.heirs_count);
      changeHeirs();
    },

    no_relative_handler() {
      this.relative = "no_relative";
      zokugara = NaN;
      if (!this.spouse) {
        this.heirs_count = 0;
      } else {
        this.heirs_count = 1;
        this.inherit_rate = 100;
        haiwari = 0;
      }
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

    show_result(step1_check, spouse_check, relative_check) {
      document.querySelector(".answer_block").style.display = "block";
      document.getElementById("caution").style.display = "block";

      if (step1_check || spouse_check || relative_check) {
        document.getElementById("xresult1").remove();
        document.getElementById("xresult").innerText = "入力・選択項目に不足があります。";
        document.getElementById("yresult").innerText = "入力・選択項目に不足があります。";
        document.getElementById("zresult1").remove();
        document.getElementById("zresult").innerText = "入力・選択項目に不足があります。";
      } else {
        tax_form();
        document.getElementById("yresult").innerText = y_result_text();
        if (sozokuzei < 0 || isNaN(sozokuzei)) {
          document.getElementById("zresult").innerText = y_result_text();
        } else {
          document.getElementById("zresult").innerText = z_result_text();
        }
        document.getElementById("zresult1")?.remove();
      }
    },
  }));
}

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("mousewheel", function (event) {
    this.blur();
  });
});
