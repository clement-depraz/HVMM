<template>
    <div>
        <section class="container">
            <div>
                <h1 class="subtitle">
                    Admin Page
                
                </h1>
                <table class="table table-striped ">
                <thead>
                  <tr>
                    <th>user name</th>
                    <th>user id</th>
                    <th>Description</th>
                    <th>Valid</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <UserListRow
                    v-for="user in Users"
                    :key="user.id"
                    :user="user"/>
                </tbody>
              </table>
            </div>
        </section>
    </div>
                  
</template>


<script>
import UserListRow from '@/components/Admin/UserListRow'

export default {
    components: {
      UserListRow
    },
    async fetch ({store}) {
      await store.dispatch('setUsers')
    },
    computed: {
      Users () {
        return this.$store.state.users
      }
    }
}


</script>
