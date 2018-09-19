<template>
    <div>

        <section class="hero-body">
            <div>
                <h1 class="subtitle">
                    Admin Page
                </h1>
            </div>
        </section>

        <div class="box">
          <div class="control has-icons-left has-icons-right has-text-centered">
              <input class="input is-large" type="search" placeholder="" />
          </div>
        </div>

            <br>

          <div class="card mb-3">

            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                              <thead>
              <tr>
                <th>Owner name</th>
                <th>Owner address</th>
                <th>Date of birth</th>
                <th>Details</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="domain in domains"
                :key="domain.id">
                <td>{{ domain.id }}</td>
                <td>{{ domain.name }}</td>
                <td>{{ domain.description }}</td>
                <td>
                  <button variant="default">Details</button>
                </td>
                <td>
                  <button variant="success">Update</button>
                </td>
                <td>
                  <button variant="danger">Delete</button>
                </td>
              </tr>
            </tbody>
                </table>
              </div>
            </div>
            <div class="card-footer small text-muted"></div>
          </div>

      </div>
              
</template>





<script>
import axios from 'axios'

export default {
    async asyncData ({ params }) {
    let { data } = await axios.get(`http://localhost/api/domains.json`)
    return { domains: data }
  }
}


</script>
