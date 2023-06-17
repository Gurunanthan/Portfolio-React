import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Email = () => {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    if (!formData.get('email') || !formData.get('name')) {
      setIsError(true);
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      await fetch('https://formsubmit.co/ajax/gurunanthan.r.j@gmail.com', {
        method: 'POST',
        body: formData,
      });

      setMessage('Submission successful!');
      setIsError(false);
      form.reset();
    } catch (error) {
      setMessage('Submission failed. Please try again.');
      setIsError(true);
    }
  };

  return (
    <div className="text-center px-3 container-md p-5" style={{ marginBottom: '15%',marginTop: '15%', color: '#fff', boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'}}>
      <h1 id="email">Hey, we can work together</h1>

      <article className="my-3 p-5" id="floating-labels" >
        <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h5 class="enter your message here"><strong>Type here what you what to convey</strong></h5>
          
        </div>

        <div className=' d-flex flex-column '>
          <div className="bd-example-snippet bd-code-snippet">
            <div className="bd-example m-0 border-0">
              <form className="text-dark" action="" method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="_captcha" value="false" />
                <input id="url" type="hidden" name="_next" value="http://localhost:3000" />
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    name="email"
                    required
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating ">
                  <textarea
                    
                    className="form-control h-25"
                    name="name"
                    required
                    id="floatingPassword"
                    placeholder="Password"
                    rows='8'
                  />
                  <label htmlFor="floatingName">Type your message</label>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Send
                  <svg
                    className="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>

      {isError && (
        <Alert variant="danger" onClose={() => setIsError(false)} dismissible>
          {message}
        </Alert>
      )}
      {!isError && message && (
        <Alert variant="success" onClose={() => setMessage('')} dismissible>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Email;
