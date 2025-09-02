import React from "react";
import "./styles/worker-card.scss"
function WorkerCard({ item }) {
  return (
    <div class="col worker-card">
      <div class="left">
        <img
          src="https://www.adobe.com/creativecloud/photography/type/media_1edd1c2b865853b2b14c35c715ab6798c2fb2bfd4.jpg?width=750&format=webply&optimize=medium"
          alt=""
        />
      </div>
      <div class="right p-4 d-flex flex-column position-static">
        <h3 class="mb-0">Vamshi krishna</h3>
        <div class="mb-1 label">Nov 12</div>
        <p class="card-text mb-auto">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </p>
      </div>
    </div>
  );
}

export default WorkerCard;
