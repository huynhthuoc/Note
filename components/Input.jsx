import React, { useEffect, useMemo } from "react";
import { dataCountries } from "~/store";
const Input = ({ type, name, value, setUser, user }) => {
    const isCountry = useMemo(() => {
        return dataCountries.some((item) => {
            return item.name.toLowerCase() === value.toLowerCase();
        });
    }, [value]);

    useEffect(() => {
        const regexName = /^[a-zA-ZÀ-ỹ\s]+$/u;
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        switch (name) {
            case "firstName":
                setUser((prev) => {
                    return {
                        ...prev,
                        isCheck: {
                            ...prev.isCheck,
                            [name]: regexName.test(value),
                        },
                    };
                });
                break;

            case "lastName":
                setUser((prev) => {
                    return {
                        ...prev,
                        isCheck: {
                            ...prev.isCheck,
                            [name]: regexName.test(value),
                        },
                    };
                });
                break;

            case "email":
                setUser((prev) => {
                    return {
                        ...prev,
                        isCheck: {
                            ...prev.isCheck,
                            [name]: regexEmail.test(value),
                        },
                    };
                });
                break;
            case "country":
                setUser((prev) => {
                    return {
                        ...prev,
                        isCheck: {
                            ...prev.isCheck,
                            [name]: isCountry,
                        },
                    };
                });
                break;
            default:
                throw new Error("in invalid case check input value !!!");
        }
    }, [value, name, isCountry, setUser]);
    function handleSetInput(event) {
        setUser((prev) => {
            return {
                ...prev,
                [name]: event.target.value,
            };
        });
    }
    return (
        <>
            <input
                style={
                    !user.isCheck[name]
                        ? {
                              boxShadow: "0px 2px red",
                          }
                        : {}
                }
                autoComplete="off"
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={handleSetInput}
                placeholder={name}
            />
        </>
    );
};

export default Input;
