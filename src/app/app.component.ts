import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public imageUrl =
    'https://i.pinimg.com/originals/00/9b/da/009bda1a0e0f371a5ebf37d37849a7a3.jpg';

  public registerForm: FormGroup;

  private readonly arrOne = [1, 2, 50, 200, 200, 15, 100];
  private readonly arrTwo = [200, 25, 56, 15];

  private person = {
    name: 'Test1',
    role: 'Developer',
    age: 33,
    passport: {
      number: 1234,
      issued: 'State registry',
    },
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    /* Question #1 */
    this.printArguments(1, 2, 3, 4, 5);

    /* Question #2 */
    this.intersectionArray(); // TODO: output => [200, 15];

    /* Question #3 */
    const newObj = this.copyObject(this.person);
    console.log('obj', newObj);

    /* Question #4 */
    this.generateRandNumber();

    /* Question #5 */
    // const sum = this.sum(1)(2)(3)(4)(5)();

    /* Question #6 */
    this.initForm();
  }

  onSubmit() {
    //
  }

  get f() {
    return this.registerForm.controls;
  }

  private initForm(): void {
    this.registerForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  private intersectionArray(): number[] {
    return [];
  }

  private generateRandNumber(): number {
    /*
      1. Функция должна генерировать рандомные числа от 1 до 100.
      2. Значения не должны повторятся.
      3. Решить задачу через замыкание.
    */

    return 1;
  }

  private sum(a): any {}

  private copyObject(obj: any): any {
    return obj;
  }

  private getLastElement(arr: number[]): number {
    return arr[arr.length - 1];
  }

  private printArguments(a, b, ...rest): void {
    // console.log(arguments.length);
    // console.log(rest);
  }
}
