import {Expect, Test, TestFixture} from 'alsatian';
import {add} from '../src/add';

@TestFixture('Add test')
export class AddTest {
    @Test()
    public rightResult(): void {
        // Act
        const result = add(1, 1);

        // Assert
        Expect(result).toBe(2);
    }
}
