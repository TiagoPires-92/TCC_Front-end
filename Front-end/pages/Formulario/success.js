import React, { useState } from 'react';
import Link from 'next/link';
import { HiBadgeCheck } from 'react-icons/hi'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Success() {

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ BorderRadius: "15px" }}>
                <div className="card-body p-4 p-md-5 row justify-content-center ">

                  <HiBadgeCheck size={50} />
                  <h3 className="text-center p-md-5">Formulário enviado com Sucesso!!</h3>
                  <center><Link href="/"><button type="button" className="button-primary">Home</button></Link></center>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
