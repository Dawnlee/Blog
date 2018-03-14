<template>
  <v-app lighten>
    <v-content>
      <v-container>
        <v-layout row wrap align-baseline>
          <v-flex xs12 md4>
            <div class="text-xs-center">
              <v-avatar size="125px">
                <img
                  class="img-circle elevation-7 mb-1"
                  src="../../assets/avatar.jpeg"
                >
              </v-avatar>
              <div class="headline">Dawn <span style="font-weight:bold">Lee</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">javascript/python/java</div>
              <v-layout justify-space-between>
                <a href="javascript:;" class="body-2">Home</a>
                <a href="javascript:;" class="body-2">About</a>
                <a href="javascript:;" class="body-2">Github</a>
                <a href="javascript:;" class="body-2">Other</a>
              </v-layout>
            </div>
          </v-flex>
          <v-flex xs12 md5 offset-md2>
            <div v-for="post in posts" :key="post.title">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="170px"
                >
                  <v-container fill-height fluid class="po-img">
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline">{{ post.title }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                  {{ post.content }}
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="red--text">
                    <v-icon medium>fa-reddit</v-icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text">
                    <v-icon medium>fa-twitter</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon medium>fa-facebook</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="blue--text">Read More</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer class="secondary">
      <v-layout row wrap align-center>
        <v-flex xs12 justify-center>
          <div class="white--text text-xs-center">
            Copyright @2018 Daoenli.com.All Rights Reserved.
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      picker: null,
      landscape: false,
      title: 'Your Logo',
      posts: [
        {
          title: 'angular指令理解',
          content: '理解angular指令编译过程，深入了解模版解析，scope作用域划分',
          imgUrl: '/static/img/angular.jpg'
        },
        {
          title: 'Donec vitae suscipit lectus, a luctus diam.',
          content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
        },
        {
          title: 'Vestibulum condimentum quam',
          content: 'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
