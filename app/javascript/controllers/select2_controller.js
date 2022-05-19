import { Controller } from "@hotwired/stimulus";
import $ from "jquery";
import "select2";
import 'select2/dist/css/select2.min.css';

export default class extends Controller {
  connect() {
    console.log("Coucou from Select2");
     $(this.element).select2();
  }
}
