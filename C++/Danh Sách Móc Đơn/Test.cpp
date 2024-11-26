#include<bits/stdc++.h>
using namespace std;
//struct sinhvien
struct sinhvien
{
	string msv;
	string ho;
	string ten;
	string namsinh;
	double diem;
};
//node
struct node{
	sinhvien info;
	node *next;
};

typedef node *tro;
// khai bao
tro l;
//khoi tao
void creat(tro &l){
	l = NULL;
}
//check rong
int empty(tro l)
{
	return l == NULL;
}
// nhap thong tin sinh vien
void nhapsv(sinhvien &a)
{
	cout<<"nhap ma sinh vien:";cin>>a.msv;
	cin.ignore();
	cout<<"nhap ho dem:";getline(cin,a.ho);
	cout<<"nhap ten:";cin>>a.ten;
	if(a.ten == "*") return;
	cout<<"nhap nam:";cin>>a.namsinh;
	cout<<"nhap diem:";cin>>a.diem;
	cin.ignore();
}
//nhap thong tin vao danh sach
void nhap(tro &l)
{
	creat(l);
	sinhvien a;
	while(true)
	{
		nhapsv(a);
		if(a.ten == "*") break;
		tro p = new node;
		p->info = a;
		p->next = NULL;
		if(l == NULL){
			l = p;
		}
		else{
			tro q = l;
			while(q->next != NULL)
			{
				q=q->next;
			}
			q->next = p;
		}
	}
}
//xuat danh sach
void xuat(tro l) {
    if (empty(l)) {
        cout << "Danh sach trong!" << endl;
        return;
    } else {
        cout << "----- DANH SACH SINH VIEN -----" << endl;
        cout << left << setw(5) << "STT" 
             << setw(10) << "MSV"
             << setw(20) << "Ho dem"
             << setw(15) << "Ten"
             << setw(10) << "Nam sinh"
             << setw(10) << "Diem" << endl;
        cout << "------------------------------------------------------------------" << endl;

        tro q = l;
        int i = 1;

        while (q != NULL) {
            sinhvien a = q->info;
            cout << left << setw(5) << i 
                 << setw(10) << a.msv
                 << setw(20) << a.ho
                 << setw(15) << a.ten
                 << setw(10) << a.namsinh
                 << setw(10) << a.diem << endl;

            q = q->next;
            i++;
        }
    }
}
//tim vi tri truoc do
tro timvt(tro l,int vt)
{
	tro q = l;
	int dem = 1;
	while(q->next != NULL && dem < vt - 1)
	{
		q = q->next;
		dem++;
	}
	return q;
}
//xoa vi tri
void xoavt(tro &l)
{
	int vt;
	cout<<"nhap vi tri can xoa:";cin>>vt;
	if(empty(l) )
	{
		cout<<"danh sach trong!";
		return;
	}
	else if(vt == 1)
	{
		tro k = l;
		l=l->next;
		delete k;
	}
	else
	{
		tro q = timvt(l,vt);
		if(q == NULL)
		{
			cout<<"loi vi tri!";
			return;
		}
		tro m = q->next;
		q->next = m->next;
		delete m;
	}
}
//
void chen(tro l,sinhvien x)
{
	tro p = new node;
	p->info = x;
	p->next = l->next;
	l->next = p;
}
//chen vi tri
void bosung(tro &l)
{
	int vt;
	sinhvien a;
	cout<<"nhap vi tri can chen:";cin>>vt;
	cin.ignore();
	nhapsv(a);
	if(l == NULL && vt != 1) 
	{
		cout<<"loi vi tri!";
		return;
	}
	if(vt == 1)
	{
		tro q = new node;
		q->info = a;
		q->next = l;
		l = q;
	}
	else{
		tro p = timvt(l,vt);
		if(p == NULL)
		{
			cout<<"loi vi tri can chen!";
			return;
		}
		chen(p,a);
	}
	
}
//tim kiem theo ten
void search(tro l)
{
	string name;
	cout<<"nhap ten sinh vien can tim:";
	cin>>name;
	int p = 0;
	tro q = l;
	while(q != NULL)
	{
		sinhvien a = q->info;
		int i = 1;
		if(a.ten == name){
				cout << left << setw(5) << i 
                 << setw(10) << a.msv
                 << setw(20) << a.ho
                 << setw(15) << a.ten
                 << setw(10) << a.namsinh
                 << setw(10) << a.diem << endl;
			p = 1;
		}
		q=q->next;
		i++;
	}
	if(p ==0) cout<<"khong tim thay ten sinh vien can tim!";
}
void replace(tro &l)
{
	string name;
	int p = 0;
	sinhvien a;
	cout<<"nhap ten sinh vien muon thay the:";cin>>name;
	cin.ignore();
	cout<<"nhap thong tin sinh vien can thay the!"<<endl;
	nhapsv(a);
	tro q = l;
	while(q != NULL)
	{
		sinhvien x = q->info;
		if(x.ten == name)
		{
			q->info = a;
			p = 1;
		}
		q=q->next;
	}
	if(p == 0) cout<<"khong tim thay ten sinh vien can thay the!";	
}
void sx(tro &l)
{
	if(l == NULL){
		cout<<"rong";
		return;
	}
	for(tro q = l;q != NULL;q = q->next)
	{
		tro m = q;
		for(tro k = q->next; k != NULL;k = k->next)
		{
			if(m->info.ten >k->info.ten)
			{
				m = k;
			}
		}
		if(m != q)
		{
			sinhvien tmp = q->info;
			q->info = m->info;
			m->info = tmp;
		}
	}
}
	




int main()
{
	nhap(l);
	xuat(l);
	xoavt(l);
	cout<<"DANH SACH SAU KHI XOA!"<<endl;
	xuat(l);
	bosung(l);
	cout<<"DANH SACH SAU KHI BO SUNG!"<<endl;
	xuat(l);
	search(l);
	replace(l);
	cout<<"DANH SACH SAU KHI THAY THE!"<<endl;
	xuat(l);
	sx(l);
	cout<<"DANH SACH SAP XEP TANG DANH THEO TEN!"<<endl;
	xuat(l);	
}

