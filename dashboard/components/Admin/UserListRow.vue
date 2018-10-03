<template>
    <tr>
        <td>{{ user.first_name }}</td>
        <td>{{ user.last_name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.rank }}</td>
 
        <td>
            <a @click="onValidateClick" class="button is-success">Validate</a>
        </td>
        <td>
            <a @click="onDeleteClick" class="button is-danger">Delete</a>
        </td>
    </tr>
</template>
<script>
export default {
  name: 'UserListRow',
  props: [ 'user' ],
  methods: {
    onValidateClick() {
      this.$emit('validate', this.user.id);
    },
    onDeleteClick() {
      this.$emit('delete', this.user.id);
    }
  }
};
</script>

