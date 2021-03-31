<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Site</h1>
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-default">
              <div>In Cart: 1</div>
              <!--<div>Total: ...</div>-->
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <li class="list-group-item">
                <a href="#">Products</a>
              </li>
              <li class="list-group-item">
                <a href="#">Cart</a>
              </li>
              <li class="list-group-item">
                <a href="#">Checkout</a>
              </li>
            </ul>
          </div>
          <div class="col col-sm-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.menu {
  border-right: 1px solid #ddd;
}

.list-group-item {
  transition: background 0.3s, color 0.3s;
}

.list-group-item a {
  display: block;
  text-decoration: none;
}

.list-group-item.active a {
  color: inherit;
}
</style>
