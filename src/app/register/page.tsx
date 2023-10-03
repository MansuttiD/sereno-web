'use client';
import FooterPrincipal from '@/src/components/shared/FooterPrincipal';
import HeaderPrincipal from '@/src/components/shared/HeaderPrincipal';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const url = 'https://api.serenoapp.com/v1/graphql/';

type Inputs = {
  name: string;
  email: string;
  country: string;
  message: string;
};

export default function Registersereno() {
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);

  const defaultValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: '',
  };

  let headersList = {
    Accept: '*/*',
    'Content-Type': 'application/json',
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const submit = (data: any) => {
    const mutation = `
    mutation SignUpForWaitList($data: SignUpForWaitListInput!) {
    signUpWaitList(data: $data) {
      country
      email
      message
      name
    }
  }
`;

Swal.fire({
  title: 'Cargando',
      text: 'Por favor espera...',
      icon: 'info',
      allowOutsideClick: false, // Evita que el usuario cierre el cuadro de alerta haciendo clic fuera de él
      showCancelButton: false, // Puedes cambiar esto según tus necesidades
      showConfirmButton: false, // Puedes cambiar esto según tus necesidades
})

axios
      .post(
        url,
        {
          query: mutation,
          variables: {
            data: data,
          },
        },
        {
          headers: headersList,
        }
      )
      .then((res) => {
        Swal.close();

        if (res.data.errors) {
          const message = res.data.errors[0].message;
          throw new Error(message);
        }

        setSuccessfulRegistration(true);
        reset(defaultValues);
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      });
    };

  return (
    <>
      <HeaderPrincipal />
      <div
        className="flex justify-center bg-no-repeat bg-contain bg-general_backgound bg-right-bottom sm:bg-wavedownload"
      >
        <section
          className={`${
            successfulRegistration ? 'hidden' : 'flex'
          }  flex-col items-center py-14  md:flex-row md:gap-[6rem] lg:py-6`}
        >
          <div className="md:mb-[150px] p-3">
            <header className="mb-6">
              <h2 className="text-xxl mb-3 font-semibold md:text-4xl">
                Lista de Espera
              </h2>
              <p className="animate-pulse bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
                ¡Sé el primero en probar nuestra plataforma!
              </p>
            </header>

            <section>
              <form
                onSubmit={handleSubmit(submit)}
                className="flex flex-col gap-4"
              >
                <input
                  {...register('name', { required: true })}
                  type="text"
                  placeholder="Nombre y Apellido"
                  className="h-[56px] border-[2px] border-solid border-[#9e9e9ec3] rounded-[10px] p-4 outline-none"
                />

                {errors.name && <span>Este campo es requerido</span>}

                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    {...register('email', { required: true })}
                    type="text"
                    placeholder="Correo Electrónico"
                    className="h-[56px] border-[2px] border-solid border-[#9e9e9ec3] rounded-[10px] p-4 outline-none"
                  />
                  {errors.email && <span>Este campo es requerido</span>}


                  <select className="h-[56px] border-[2px] border-solid border-[#9e9e9ec3] rounded-[10px] p-4 outline-none text-[#000]" {...register('country', { required: true })}>
                  <option value="select">Selecciona el País</option>
                    <option value="AR">Argentina</option>
                    <option value="BZ">Belice</option>
                    <option value="BO">Bolivia</option>
                    <option value="BR">Brasil</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CU">Cuba</option>
                    <option value="EC">Ecuador</option>
                    <option value="SV">El Salvador</option>
                    <option value="GT">Guatemala</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haití</option>
                    <option value="HN">Honduras</option>
                    <option value="JM">Jamaica</option>
                    <option value="MX">México</option>
                    <option value="NI">Nicaragua</option>
                    <option value="PA">Panamá</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Perú</option>
                    <option value="DO">República Dominicana</option>
                    <option value="SR">Surinam</option>
                    <option value="TT">Trinidad y Tobago</option>
                    <option value="UY">Uruguay</option>
                    <option value="VE">Venezuela</option>
                  </select>
                  {errors.country && <span>Este campo es requerido</span>}
                </div>

                <div>
                  <textarea
                    {...register('message', { required: true })}
                    
                    placeholder="¿Qué te gustaría lograr utilizando Sereno? (Ej. Cargar con un método de pago en particular, envío de remesas, inversiones)"
                    className="h-[140px] border-[2px] border-solid border-[#9e9e9ec3] rounded-[10px] p-4 outline-none w-full"
                  />

                </div>
                {errors.message && <span>Este campo es requerido</span>}

                <input
                  type="submit"
                  className="w-full py-1 text-xl rounded-lg text-white bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-500 hover:bg-gradient-to-tl hover:from-blue-500 hover:via-blue-400 hover:to-blue-400 transition duration-300 transform hover:-translate-y-1"
                />
              </form>
            </section>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="./assets/img/home/mokupform.png"
              alt="Descarga Sereno"
              className="hidden md:block md:h-[600px] lg:h-[700px]"
            />
          </div>
        </section>
        <section className={`px-6 ${successfulRegistration ? '' : 'hidden'}`}>
          <div className="flex flex-col justify-center align-middle text-center mb-6 min-h-[67vh] max-w-md md:mb-8 md:max-w-2xl">
            <h2 className="text-2xl mb-4 font-semibold md:text-4xl md:text-xxl">
              ¡Registro Exitoso!
            </h2>
            <p className="from-blue-700 text-base md:text-md">
            ¡Excelente! Has dado el primer paso para una nueva forma de manejar tus remesas con Sereno.
            </p>
          </div>
        </section>
      </div>
      <FooterPrincipal />
    </>
  );
}
