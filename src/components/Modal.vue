 <template>
 <!-- 使用事件代理 -->
 <div>
    <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':mdShow}">
    <div class="md-modal-inner">
        <div class="md-top">
            <div class="md-title">提示</div>
            <button class="md-close"  @click="closeModal">Close</button>
        </div>
        <div class="md-content">
            <div class="confirm-tips">
                <slot name="message"></slot>
            </div>
            <div class="btn-wrap">
                <slot name="btn-group"></slot>
            </div>
        </div>
    </div>
</div> 
<div class="md-overlay" v-show="mdShow"  @click="closeModal"></div>
 </div>
 </template>

 <script>
 export default {
    props: ['mdShow'],
    data() {
        return {
        }
    },
    methods: {
        closeModal(e) {
            this.$emit('closeModalEvent')
        }
    }
 }
 </script>

 <style>
 </style>