#include <iostream>
using namespace std;

void func(int a[], int n){

    int s1 = 0, s2 = 0;

    for(int i=0; i<n; i+=2)
        s1 += a[i];
    
    for(int i=1; i<n; i+=2)
        s2 += a[i];

    cout<<max(s1, s2)<<endl;
}

int main(){

    int n;
    cin>> n;

    int a[n];

    for(int i=0; i<n; i++)
        cin>>a[i];

    func(a, n);
}