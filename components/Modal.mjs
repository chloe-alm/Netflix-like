export default function Modal(props) {
    return `
      <div class="modal__container">
        <div class="cross">X</div>
          <h1 class="modal__container-title">${props.original_title || props.name}</h1>
          <div class="modal__container-detail>
              <p class="modal__container-detail-p">Rating: ${Math.ceil(props.popularity)}%</p>
               <p class="modal__container-detail-p">
                <span class="modal__container-detail-p-note">Note: ${props.vote_average}%</span>
                Date de sortie: ${props.release_date}  Durée: ${props.runtime}m Episode: ${props.episode_run_time}
                </p>
              </div>
              <p class="modal__container-overview">${props.overview}</p>
              <button class="modal__container-btnPlay"> Play </button>
              <button class="modal__container-btnFavouriteList"> My List </button>
       </div>
`
  }
