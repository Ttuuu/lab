<template>
  <div id="outer-container">

    <div id="container1">
      <md-card md-with-hover>
        <md-badge md-content="new" />

        <md-ripple>
          <md-card-header>
            <div class="md-title">Select courses for new Term</div>
            <div class="md-subhead">2020-02-10</div>
          </md-card-header>

          <md-card-content>
            You have been a junior student！Select courses for the coming term!
          </md-card-content>

          <md-card-actions>
            <md-button>Watch More</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>

      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">A very casual title</div>
            <div class="md-subhead">2019-12-13</div>
          </md-card-header>

          <md-card-content>
            This is a casual waterfall layout. Don't care too much about the text content, I wrote them casually cause it's very tired to make the interface, and even more tired to make the filling content exquisite.In order to increase the length of the text, I will fill in some rubbish. Today, I had two large cups of milk tea and wanted to have roast chicken.

          </md-card-content>

          <md-card-actions>
            <md-button>Watch More</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">About time</div>
            <div class="md-subhead">2019-12-13</div>
          </md-card-header>

          <md-card-content>
            It's also informal.
          </md-card-content>

          <md-card-actions>
            <md-button>Watch More</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>





    </div>
    <div id="container2">
      <md-card md-with-hover>
        <md-badge md-content="new" />

        <md-ripple>
          <md-card-header>
            <div class="md-title">Winter vacation is coming!</div>
            <div class="md-subhead">2020-01-13</div>
          </md-card-header>

          <md-card-content>
            Congratulations! If all goes well, you can graduate next year. You also need to take 20 credit courses. Please be prepared. And then there's some filler length crap.
          </md-card-content>

          <md-card-actions>
            <md-button>Watch More</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">About interface</div>
            <div class="md-subhead">2019-12-13</div>
          </md-card-header>

          <md-card-content>
            The button can't jump cause I don't want to make up more data. This is just a card showing the summary. It ought to jump, but since the theme is the course selection system, I'll simplify this one make a simple home page. BTW, the homework is really really really too much.
          </md-card-content>

          <md-card-actions>
            <md-button>Watch More</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">About data</div>
            <div class="md-subhead">2019-12-13</div>
          </md-card-header>

          <md-card-content>
            I didn't pass the parameters accurately. I hope you don't deduct my score because of this(๑•́ ₃ •̀๑)
          </md-card-content>

          <md-card-actions>
            <md-button>Watch More</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>


    </div>
    <div id="container3">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">List of the most popular teachers/TAS announced!</div>
            <div class="md-subhead">2020-01-03</div>
          </md-card-header>

          <md-card-content>
            Let's see if your favorite teacher / TA is on the list!
          </md-card-content>

          <md-card-actions>
            <md-button>Watch More</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>

      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">About why I don't use Chinese</div>
            <div class="md-subhead">2019-12-13</div>
          </md-card-header>

          <md-card-content>
            The default sugar content of milk tea is quite light. Sometimes I write filling information will read strange, because my English is not good, so I use Baidu translation. When it comes to why I don't use Chinese, in fact, the layout of Chinese is OK, even better than English. It won't produce some strange line breaks because of the length of the words. But it's too troublesome for me to switch the input method when writing. And sometimes we need to pass on the parameters (although the problem should not be very big), but in order to avoid more trouble, I use English instead (I don't know whether if you can see here, I wrote it optionally)
          </md-card-content>

          <md-card-actions>
            <md-button>Watch More</md-button>
          </md-card-actions>
        </md-ripple>
      </md-card>






    </div>


  </div>
</template>

<style lang="scss" scoped>
  #outer-container{
    display:flex;
    justify-content: space-around;
  
  }
  #container1,#container2,#container3{
    display: flex;
    flex-direction: column;

  }
  .md-card {
    width: 300px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
export default {
  name: 'RegularCards'
}
</script>