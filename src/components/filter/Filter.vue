<template>
  <filter-select
    v-for="f in filters"
    :key="f.id"
    v-model="f.value"
    :items="unique(persons, f.getter)"
    :name="f.name"
  ></filter-select>
  <button @click="resetFilters">reset</button>
  <table>
    <thead>
    <tr>
      <th>id</th>
      <th>first name</th>
      <th>surname</th>
      <th>country</th>
    </tr>
    </thead>
    <tbody>
    <tr :key="p.id" v-for="p in filteredPersons">
      <td>{{ p.id }}</td>
      <td>{{ p.name.firstname }}</td>
      <td>{{ p.name.surname }}</td>
      <td>{{ p.country }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import FilterSelect from './FilterSelect'

export default {
  data () {
    return {
      filters: [
        {
          id: 0,
          name: 'Surname',
          value: '',
          getter: (obj) => obj.name.surname
        },
        { id: 1, name: 'Country', value: '', getter: (obj) => obj.country }
      ],
      persons: [
        {
          id: 0,
          name: { firstname: 'John', surname: 'Smith' },
          country: 'USA'
        },
        { id: 1, name: { firstname: 'Jane', surname: 'Smith' }, country: 'UK' },
        {
          id: 2,
          name: { firstname: 'Nick', surname: 'Right' },
          country: 'USA'
        },
        {
          id: 3,
          name: { firstname: 'Kevin', surname: 'Smith' },
          country: 'USA'
        },
        {
          id: 4,
          name: { firstname: 'Mary', surname: 'Jones' },
          country: 'USA'
        },
        { id: 5, name: { firstname: 'Brad', surname: 'Smith' }, country: 'UK' },
        {
          id: 6,
          name: { firstname: 'Helen', surname: 'Jones' },
          country: 'USA'
        }
      ]
    }
  },
  methods: {
    unique (arr, getter) {
      return [...new Set(arr.map(getter))]
    },
    resetFilters () {
      this.filters.forEach((n) => (n.value = ''))
    }
  },
  computed: {
    filteredPersons () {
      return this.filters.reduce((persons, { value, getter }) => {
        return value ? persons.filter((n) => getter(n) === value) : persons
      }, this.persons)
    }
  },
  components: {
    FilterSelect
  }
}
</script>

<style lang="scss">
table {
  margin: 10px;
}
th,
td {
  padding: 5px 10px;
  border: 1px solid silver;
}
th {
  background: #eee;
}
.filter {
  margin: 5px;
}
</style>
