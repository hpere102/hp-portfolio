import React from 'react';
import Projects from '../Projects';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Work({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <div class="work-cont">
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      </div>
      <Projects category={currentCategory.name} />
    </section>
  );
}

export default Work;