import React from "react";
import myImg from "../../images/profile/jacks-pic.jpg";
import teethWizard from '../../images/projects/Teeth.png'
import warehouse from '../../images/projects/warehouse.png'
import volunteer from '../../images/projects/volunteer.png'

const MyPortfolio = () => {
  return (
    <div className="bg-slate-700 flow-root">
      <div className="max-w-[1000px] mx-auto w-[95%] my-10">
      <div className="card card-side bg-base-100 shadow-xl flex">
        <figure className="flex-1">
          <img src={myImg} alt="Movie" className="w-full h-full object-cover" />
        </figure>
        <div className="card-body flex-1">
          <h2 className="font-bold text-3xl">Mir Jakariya</h2>
          <div className="font-semibold">
            <div className="text-red-700">Mern Stack Developer</div >
            <p className="">
              <span className="font-semibold text-primary">Email:</span> mirjakariya239@gmail.com
            </p>
            <div>
              <span className="font-semibold text-primary">LinkedIn: </span><a href="https://www.linkedin.com/in/mir-jakariya-99b777229/" >Profile Link</a>

            </div>
            <div>
              <span className="font-semibold text-primary">Address:</span>

            </div>
            <div>
              <span className="font-semibold text-primary">Educational Background:</span>

            </div>
            <div className="ml-3"><span className="font-semibold text-red-700">Institute:</span> Daffodil International University</div>
            <div className="ml-3">
              <span className="font-semibold text-red-700">Subject:</span>EEE
            </div>
            <div>
              <span className="font-semibold text-red-700 ml-3">Passing Year:</span> 2020
            </div>
            <div>
              <span className="text-primary font-semibold">
                Skills:
               
              </span>
              <p className="">
              HTML5,CSS3,Javascript,React,Node.js,Mongodb,Firebase,Tailwind
                CSS, Bootstrap, React Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold my-5 text-center text-white">Projects:</h1>
      <div>
        <div className="card card-side bg-base-100 max-w-[800px] mx-auto shadow-xl flex">
          <figure className="w-[40%] h-[300px]">
            <img
              src={volunteer}
              alt="Movie"
              className="h-full w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-primary">Volunteer Network {'(MERN Stack)'}</h2>
            <div>
            <p className="font-semibold text-lg text-red-700">Key Features:</p>
            <ul className="list-disc">
              <li className="ml-6">Users can check out any volunteer service and register as a volunteer for that service.</li>
              <li className="ml-6">In the “volunteer list” route users can see his service and also can delete the services.</li>
              <li className="ml-6">Users can add or delete any volunteer events.</li>
            </ul>
            </div>
            <div className="card-actions justify-end">
            <a className="btn btn-primary" href="https://voluteer-service.web.app/">live website link</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="card card-side bg-base-100 max-w-[800px] mx-auto shadow-xl flex">
          <figure className="w-[40%] h-[300px]">
            <img
              src={warehouse}
              alt="Movie"
              className="h-full w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-primary">Military Warehouse {'(MERN Stack)'}</h2>
            <div>
            <p className="font-semibold text-lg text-red-700">Key Features:</p>
            <ul className="list-disc">
              <li className="ml-6">After login the user will see three more routes: “manage items”, ”add items” and “my items”.</li>
              <li className="ml-6">Users can update product stock or deliver products.</li>
              <li className="ml-6">In the “manage items” route users will be able to delete or restock items.</li>
            </ul>
            </div>
            <div className="card-actions justify-end">
            <a className="btn btn-primary" href="https://inventory-management-11-9b48e.web.app/">live website link</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="card card-side bg-base-100 max-w-[800px] mx-auto shadow-xl flex">
          <figure className="w-[40%] h-[300px]">
            <img
              src={teethWizard}
              alt="Movie"
              className="h-full w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-primary">Teeth Wizard {'(React Front end Project)'}</h2>
            <div>
            <p className="font-semibold text-lg text-red-700">Key Features:</p>
            <ul className="list-disc">
              <li className="ml-6">Homepage contains a banner, some dental services and some client reviews.</li>
              <li className="ml-6">Users can make appointments by clicking the “checkout more” button.</li>
              <li className="ml-6">If the user logs in then the log out button will show up and the user can log out from the website.</li>
            </ul>
            </div>
            <div className="card-actions justify-end">
            <a className="btn btn-primary" href="https://rainbow-pegasus-a25c65.netlify.app/">live website link</a>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default MyPortfolio;
