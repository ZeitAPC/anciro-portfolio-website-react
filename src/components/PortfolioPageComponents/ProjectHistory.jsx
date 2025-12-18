function ProjectHistory() {return(
<>
  <h1 className="heading">My previous projects</h1>
  <table className="myPreviousProjects">
    <tbody>
      <tr>
        <th className="titleRow" scope="col">Project Name</th>
        <th className="titleRow" scope="col">Description</th>
        <th className="titleRow" scope="col">Year finished</th>
      </tr>
      <tr>
        <th scope="row">Lace it <span className="badge text-bg-success" style={{ color: 'green' }}>Completed</span></th>
        <td>An e-commerce website about a shoe company. In fulfillment of a finals requirement for TLE</td>
        <td>2022</td>
      </tr>
      <tr>
        <th scope="row">AlAn Script<span className="badge text-bg-success" style={{ color: 'green' }}>Completed</span></th>
        <td>A portfolio website for me and my partner containing our resume, a video explanation about a topic, and where to contact us</td>
        <td>2023</td>
      </tr>
      <tr className="python-CLI">
        <th>Weather app<span className="badge text-bg-success" style={{ color: 'green' }}>Completed</span></th>
        <td>A CLI program made in python that checks for the weather of a location. Uses the OpenWeatherMap API</td>
        <td>2024</td>
      </tr>
      <tr className="java-CLI" >
        <th>Indirect Clothing Inc<span className="badge text-bg-success" style={{ color: 'green' }}>Completed</span></th>
        <td>A CLI program made in java that allows users to order clothes and submit a support ticket</td>
        <td>2025</td>
      </tr>
      <tr className="python-CLI">
        <th scope="row">Barangay Task Manager<span className="badge text-bg-success" style={{ color: 'green' }}>Completed</span></th>
        <td>A CLI program made in python that allows for users to suggest, vote, and view current list of tasks.</td>
        <td>2025</td>
      </tr>
      <tr>
        <th scope="row">ARE YOU HUMAN?: AI ETHICS<span className="badge text-bg-success" style={{ color: 'green' }}>Completed</span></th>
        <td>A discord bot made in python to create new channel for each user joining. The game is about choosing which response to the given question is the Human response</td>
        <td>2025</td>
      </tr>
      <tr className="python-CLI">
        <th scope="row">Eco-Path Finder<span className="badge text-bg-success" style={{ color: 'green' }}>Completed</span></th>
        <td>A CLI program made in python that implements <a href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm" className="dijkstraLink" target="_blank" style={{ color: 'var(--color-accent-primary)' }}>Dijkstra's Algorithm</a> and adding road types, number of stoplights,
          and congestion to the factors considered when calculating each path.</td>
        <td>2025</td>
      </tr>
      <tr>
        <th scope="row">
          Portfolio Website
        </th>
        <td>A website made using HTML, CSS, JS, and Bootstrap to show my portfolio to potential clients</td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">
          E-commerce Website
          <div className="progress" style={{ border: '1px solid var(--color-text-main)' }} role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width: '0%' }}></div>
          </div>
        </th>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</>
)}
export default ProjectHistory;