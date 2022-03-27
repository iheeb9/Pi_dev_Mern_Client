import { useEffect, useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

export function CheckoutDeliveryAddress({
  value,
  canProceedChange,
  onValueChange,
}) {
  const [deliveryAddressData, setDeliveryAddressData] = useState({});
  const requiredInputs = ["address", "country", "city", "postalCode"];

  countries.registerLocale(enLocale);
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  useEffect(() => {
    validate();
    setDeliveryAddressData(value);
  }, []);

  useEffect(() => {
    validate();
    onValueChange(deliveryAddressData);
  }, [deliveryAddressData]);

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setDeliveryAddressData({ ...deliveryAddressData, [name]: value });
  }
  const selectCountryHandler = (value) =>
    handleChangeInput({ target: { name: "country", value } });

  function validate() {
    canProceedChange(requiredInputs.every((val) => deliveryAddressData[val]));
  }

  return (
    <>
      <form class="form" method="post">
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="form-group">
              <label>
                Street Address<span>*</span>
              </label>
              <input
                name="address"
                type="text"
                placeholder=""
                value={deliveryAddressData.address || ""}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="form-group">
              <label>
                Country<span>*</span>
              </label>
              <select
                class="custom-select"
                name="country"
                id="inputGroupSelect01"
                value={deliveryAddressData.country || ""}
                onChange={(e) => selectCountryHandler(e.target.value)}
              >
                <option selected value="....">
                  Choose...
                </option>
                {countryArr.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="form-group">
              <label>
                City<span>*</span>
              </label>
              <input
                name="city"
                type="text"
                placeholder=""
                value={deliveryAddressData.city || ""}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="form-group">
              <label>
                Zip Code<span>*</span>
              </label>
              <input
                name="postalCode"
                type="text"
                placeholder=""
                value={deliveryAddressData.postalCode || ""}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group message">
              <label>Delivery Notes</label>
              <textarea
                name="notes"
                placeholder=""
                value={deliveryAddressData.notes || ""}
                onChange={handleChangeInput}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
