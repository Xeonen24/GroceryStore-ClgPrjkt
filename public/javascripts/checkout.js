//Stripe (not working yet)
const stripe = Stripe("pk_test_51LfN57Frfc9zpiUZtjIbQFiRVZvocvDYe0i2bKFHfj7zGsr0JYHFH853Yh2eFLeVhmGv0er00erN7e1Qzs7JelQc00E8sQVLIy");
const elements = stripe.elements();

const style = {
  base: {
    color: "#32325d",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a",
  },
};
const card = elements.create("card", { style: style });
card.mount("#card-element");
card.addEventListener("change", function (event) {
  const displayError = document.getElementById("card-errors");
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = "";
  }
});

const $form = $("#checkout-form");
$form.submit(function (event) {
  event.preventDefault();
  $form.find("button").prop("disabled", true);
  const extraDetails = {
    name: $("#card-name").val(),
  };
  stripe.createToken(card, extraDetails).then(function (result) {
    if (result.error) {
      $form.find("button").prop("disabled", false);
    } else {
      stripeTokenHandler(result.token);
    }
  });
});

function stripeTokenHandler(token) {
  $form.append($('<input type="hidden" name="stripeToken" />').val(token.id));
  $form.get(0).submit();
}