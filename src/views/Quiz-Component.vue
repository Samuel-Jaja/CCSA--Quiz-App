<template>
  <div>
    <div v-for="(question, indx) in questions" :key="indx">
      <div v-if="currentQuestion === indx">
        <app-question-card
          @checked="selectOption"
          :index="indx"
          :question="question"
        />
      </div>
    </div>
    <div class="buttons">
      <app-button-vue
        v-if="currentQuestion !== 0"
        @clicked="goToPrev"
        :style="'Danger'"
        :value="'Prev'"
      />
      <app-button-vue
        v-if="currentQuestion !== questions.length - 1"
        @clicked="goToNext"
        :style="'Success'"
        :value="'Next'"
      />
      <app-button-vue
        v-if="currentQuestion === questions.length - 1"
        @clicked="finishQuiz"
        :style="'Success'"
        :value="'Finish'"
      />
    </div>
  </div>
</template>

<script>
import AppQuestionCard from "../components/App-Question-Card.vue";
import AppButtonVue from "../components/App-Button.vue";
import { mapGetters, mapMutations, mapState, mapActions } from "vuex";

export default {
  components: {
    AppQuestionCard,
    AppButtonVue,
  },
  data() {
    return {
      currentQuestion: 0,
    };
  },
  computed: {
    ...mapGetters(["questions", "currentQuestion"]),
    ...mapState(["questions"]),

    score() {
      return this.questions.filter(
        (question) => question.chosenAnswer === question.correct_answer
      );
    },
  },
  methods: {
    ...mapMutations(["setQuestions"]),
    ...mapActions(["loadQuestions"]),

    finishQuiz: function () {
      this.$router.push({
        name: "Score",
        params: {
          userscore: this.score.length,
        },
      });
    },

    selectOption: function (params) {
      this.questions[params.qIndex].chosenAnswer = params.value;
    },

    goToNext() {
      this.currentQuestion((this.currentQuestion = this.currentQuestion + 1));
    },
    goToPrev: function () {
      this.currentQuestion((this.currentQuestion = this.currentQuestion - 1));
    },
  },
  mounted: async function () {
    const data = await this.loadQuestions();
    this.questions = data.results;
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
