import { useEffect, useRef, useState } from "react";
import IntlTelInput, { CountryData } from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { TextInput } from "@virtuslab/tetrisly-react";

export default function PhoneInput() {
    const [isValid, setIsValid] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [phone, setPhone] = useState("");
    const [formattedPhone, setFormattedPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+7");
    const [sortedCountries, setSortedCountries] = useState<CountryData[]>([]);
    const intlRef = useRef<IntlTelInput>(null);
    const textInputPhoneRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };

        const parentElement = textInputPhoneRef.current?.parentElement;
        document.addEventListener("mousedown", handleClickOutside);
        parentElement?.addEventListener("click", handleDropdownClick);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            parentElement?.removeEventListener("click", handleDropdownClick);
        };
    }, []);

    useEffect(() => {
        const fullPhone = intlRef.current?.getFullNumber(phone);
        setIsValid(intlRef.current?.isValidNumber(fullPhone) || false);
        const formattedPhone = intlRef.current?.state?.value || "";
        setFormattedPhone(formattedPhone);
    }, [intlRef.current, textInputPhoneRef.current, phone]);

    useEffect(() => {
        // Сортировка стран по имени
        const countries = intlRef.current?.countries || [];
        const sorted = countries.sort((a, b) => Number(a.dialCode) - Number(b.dialCode));
        setSortedCountries(sorted);

        // каюсь, простите, извините
        if (intlRef.current) {
            setTimeout(() => {
                handleCountryChange(intlRef.current?.selectedCountryData?.iso2 || "")
            }, 50);
        }

    }, [intlRef.current?.countries]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPhone = e.target.value;
        if (intlRef.current) {
            intlRef.current.setNumber(newPhone);
            setPhone(newPhone);
        }
    };

    const handleDropdownClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest("[data-testid='text-input-before-component']")) {
            setShowMenu((menu) => !menu);
            event.stopPropagation();
            console.log(showMenu);
        }
    };

    const handleCountryChange = (iso2: string) => {
        const countryData = intlRef.current?.countries.find((c: any) => c.iso2 === iso2);
        if (!countryData) return;

        if (intlRef.current && textInputPhoneRef.current) {
            const placeholder = intlRef.current?.state.placeholder;
            const updatedPlaceholder = placeholder?.replace(/\d/g, '0') || "(000)-000-00-00";
            textInputPhoneRef.current.placeholder = updatedPlaceholder || "(000)-000-00-00";
        }

        setCountryCode(`+${countryData.dialCode}`);
        setShowMenu(false);
        intlRef.current?.setNumber(`+${countryData.dialCode}`);
    };

    const getCountryFlagEmoji = (iso2: string) => {
        const codePoints = iso2.toUpperCase().split("").map((char) => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    };

    return (
        <div style={{ position: "relative" }}>
            <IntlTelInput
                ref={intlRef}
                preferredCountries={["ru", "us", "gb"]}
                containerClassName="intl-tel-input"
                inputClassName="form-control"
                separateDialCode
                style={{ display: "none" }}
            />

            <TextInput
                ref={textInputPhoneRef}
                beforeComponent={{
                    props: {
                        label: countryCode,
                    },
                    type: "Dropdown",
                }}
                onChange={handleChange}
                value={formattedPhone}
                status={isValid ? "default" : "alert"}
                message={!isValid ? "Неверный номер" : ""}
            />

            {showMenu && (
                <div
                    ref={dropdownRef}
                    className="absolute overflow-x-hidden overflow-y-auto top-full left-0 bg-white border border-[#ddd] rounded-md shadow-[0px_4px_6px_rgba(0,_0,_0,_0.1)] z-10 h-[200px] w-full"
                >
                    {sortedCountries.map((country: CountryData) => (
                        <div
                            key={country.iso2}
                            onClick={() => handleCountryChange(country.iso2!)}
                            style={{
                                padding: "8px 12px",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee",
                            }}
                        >
                            <span>{getCountryFlagEmoji(country.iso2!)}</span> +{country.dialCode} | {country.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}