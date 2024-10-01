import React from 'react';
import '../App.css'; // Make sure this is imported

function Home() {
  return (
    <section>
      <h1>Welcome!</h1>

      <p>Content to be added.</p>

      <div className="divider"></div>


      <h2>CHANGE LOG: </h2>
      <table className="modern-table"> {/* Use className for React */}
        <thead>
          <tr>
            <th>Date</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25.9.2024</td>
            <td>Implemented Git to VSCode: commits and pushes through VSCode.</td>
          </tr>
          <tr>
            <td>10.9.2024</td>
            <td>Added a photo to 'Website history'.</td>
          </tr>
          <tr>
            <td>22.2.2024</td>
            <td>Minor CSS improvements.</td>
          </tr>
          <tr>
            <td>6.2.2024</td>
            <td>Font and coloring improvements.</td>
          </tr>
          <tr>
            <td>27.1.2024</td>
            <td>Added 'Website history'.</td>
          </tr>
          <tr>
            <td>26.1.2024</td>
            <td>Published the website.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Home;
