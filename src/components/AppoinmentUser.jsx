import React from 'react';
import { useForm } from 'react-hook-form';


const AppoinmentUser = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  return (
    <div className='container'>
      <div className="col">
        <form noValidate onSubmit={handleSubmit()} className="row my-3 g-3 ">
          <h3 className='text-center  fw-bold text-uppercase mb-2'>Reservar turno</h3>
          <fieldset class="col-md-6">
            <label htmlFor="date-input" class="form-label">fecha y hora</label>
            <input type="datetime-local" name='date-input' required placeholder='sellecione fecha y hora' class="form-control" id="date-input"
              {...register('datetime', {
                required: 'Este campo es obligatorio.'
              })} />
            <p className="text-danger bg-danger-subtle my-2 rounded-2">
              {errors.datetime?.message}
            </p>
          </fieldset>
          <fieldset class="col-md-6">
            <label htmlFor='vet-input' class="form-label">Veterinario</label>
            <select
              className="form-select"
              aria-label="Elegir veterinario"
              // onChange={handleAdd}
              id="vet-input"
              name="veterinarian"
            >
              <option value="0" disabled>
                Elegir veterinario
              </option>
              <option value="Diego Torres">Diego Torres</option>
              <option value="Patricia Sosa">Patricia Sosa</option>
            </select>
          </fieldset>
          <fieldset class="col-md-6">
            <label htmlFor='userAppoinments' class="form-label">propietario</label>
            <input type="text" minLength={3} maxLength={40} placeholder='nombre de usuario' class="form-control" id="user-input" required name="_id"
              {...register('name', {
                required: "Este campo es obligatorio.",
                minLength: {
                  value: 3,
                  message: "Escribe un mínimo de 3 caracteres.",
                },
                maxLength: {
                  value: 40,
                  message: "Escribe un máximo de 40 caracteres.",
                },
              })}
            />
            <p className="text-danger bg-danger-subtle my-2 rounded-2">
              {errors.name?.message}
            </p>
          </fieldset>
          <fieldset class="col-md-6">
            <label htmlFor='pet-input' class="form-label">mascota</label>
            <input type="text" minLength={3} maxLength={50} required placeholder='nombre de mascota y especie' class="form-control" name='pet-input' id="pet-input"
              {...register('pet', {
                required: "Este campo es obligatorio.",
                minLength: {
                  value: 3,
                  message: "Escribe un mínimo de 3 caracteres.",
                },
                maxLength: {
                  value: 50,
                  message: "Escribe un máximo de 50 caracteres.",
                },
              })}
            />
            <p className="text-danger bg-danger-subtle my-2 rounded-2">
              {errors.pet?.message}
            </p>
          </fieldset>
          <fieldset class="col-md-12">
            <label htmlFor='detail-input' class="form-label">detalle</label>
            <textarea type="text" placeholder='motivo de consulta' minLength={5} maxLength={99} name='detail-input' class="form-control" id="detail-input" 
            {...register('detail',{
              required:"Este campo es obligatorio.",
              minLength: {
                value: 5,
                message: "Escribe un mínimo de 5 caracteres.",
              },
              maxLength: {
                value: 99,
                message: "Escribe un máximo de 100 caracteres.",
              },
            })}
            />
            <p className="text-danger bg-danger-subtle my-2 rounded-2">
              {errors.detail?.message}
            </p>
          </fieldset>
          <div className='d-grid'>
            <button className="btn btn-primary fw-bold text-uppercase">confirmar</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AppoinmentUser