// resources/js/Pages/UserLogin/UserLogin.jsx
import GlobalLayout from "@/Layout/GlobalLayout/GlobalLayout";
import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";

import { Web3Button } from "@web3modal/react";
import { router } from "@inertiajs/react";

const UserLogin = ({ props, error }) => {
    useEffect(() => {
        ethereumClient.watchAccount(function (account) {
            if (account.address != undefined) {
                let wallet = account.address;
                router.get(route("user.create"));
            }
        });
    }, []);
    return (
        <GlobalLayout>
            <main className="flex items-center justify-center min-h-screen p-4">
                {/* backgrounds */}
                <div className="fixed w-screen h-screen pointer-events-none -z-10">
                    <div className="absolute top-0 bottom-0 right-0 my-auto h-max">
                        <img
                            src="/img/auth-background-right.png"
                            className="hidden max-h-screen 2xl:block"
                        />
                    </div>
                </div>
                <div className="container grid max-w-7xl gap-8 mx-auto">
                    <header>
                        <div className="flex justify-center 2xl:justify-start">
                            <img src="/img/logo-dark.svg" alt="logo" />
                        </div>
                    </header>
                    <section className="grid gap-8 text-center 2xl:text-left">
                        <h2 className="text-5xl font-extrabold 2xl:text-7xl  mxs:text-4xl">
                            Bnic.io <br className="hidden 2xl:block" />
                            Manager Your <br className="mxs:hidden" />
                            Decentral <br className="hidden 2xl:block" />
                            Idendity
                        </h2>
                        <p className="max-w-sm mx-auto text-lg 2xl:mx-0">
                            Create your Decentral identity and unlock new
                            opportunities in the digital world. Connect Wallet
                        </p>
                        <div className="flex justify-center 2xl:justify-start">
                            <Web3Button />
                        </div>
                    </section>
                </div>
            </main>
        </GlobalLayout>
    );
};

export default UserLogin;
