import React from 'react';
import Projects from '../Projects';
import { capitalizeFirstLetter } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';

function Work({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <div class="work-cont">
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <h3 class="lead">{description}</h3>
      <hr class="my-4"></hr>
      <p class="lead"></p>
      </div>
      <Projects category={currentCategory.name} />
    </section>
  );
}

export default Work;